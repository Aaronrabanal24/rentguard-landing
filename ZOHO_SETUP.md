# Zoho CRM OAuth Setup Guide

This guide will walk you through setting up OAuth credentials for the Zoho CRM integration.

## Step 1: Create a Zoho API Console Application

1. **Go to Zoho API Console**
   - Visit: https://api-console.zoho.com/
   - Sign in with your Zoho account (the one with CRM access)

2. **Create a New Application**
   - Click "Add Client" or "Get Started"
   - Choose **"Server-based Applications"**
   - Fill in the application details:
     - **Client Name**: RentGuard Landing (or any name you prefer)
     - **Homepage URL**: Your production domain (e.g., `https://rentguard.com`)
     - **Authorized Redirect URIs**: Add `https://yoursite.com/oauth/callback` (you can use any valid URL since we'll use self-client)
   - Click "Create"

3. **Save Your Credentials**
   - You'll see your **Client ID** and **Client Secret**
   - Copy these immediately and store them securely
   - ⚠️ The Client Secret is only shown once!

## Step 2: Determine Your Data Center

Zoho has different data centers based on your account location:

- **US**: `https://accounts.zoho.com` and `https://www.zohoapis.com`
- **EU**: `https://accounts.zoho.eu` and `https://www.zohoapis.eu`
- **India**: `https://accounts.zoho.in` and `https://www.zohoapis.in`
- **Australia**: `https://accounts.zoho.com.au` and `https://www.zohoapis.com.au`
- **China**: `https://accounts.zoho.com.cn` and `https://www.zohoapis.com.cn`

Check your Zoho CRM URL to determine which one you need.

## Step 3: Generate Initial Authorization Code

1. **Build the Authorization URL**

   Replace the placeholders with your values:

   ```
   https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL&client_id=YOUR_CLIENT_ID&response_type=code&access_type=offline&redirect_uri=YOUR_REDIRECT_URI
   ```

   **Parameters:**
   - `scope`: `ZohoCRM.modules.ALL` (or specific scopes like `ZohoCRM.modules.leads.CREATE`)
   - `client_id`: Your Client ID from Step 1
   - `response_type`: `code`
   - `access_type`: `offline` (required for refresh tokens)
   - `redirect_uri`: Must match one of the URIs from Step 1

   **Example:**
   ```
   https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL&client_id=1000.XXXXXXXXXXXXX&response_type=code&access_type=offline&redirect_uri=https://rentguard.com/oauth/callback
   ```

2. **Visit the URL in Your Browser**
   - Paste the authorization URL into your browser
   - You'll be asked to authorize the application
   - Click "Accept"
   - You'll be redirected to your redirect_uri with a `code` parameter in the URL

3. **Extract the Authorization Code**
   - The URL will look like: `https://yoursite.com/oauth/callback?code=1000.xxxxx...`
   - Copy the entire `code` value (everything after `code=`)
   - ⚠️ This code expires in **60 seconds**, so use it immediately!

## Step 4: Generate Refresh Token

You need to exchange the authorization code for a refresh token. You can do this with `curl`:

```bash
curl -X POST \
  "https://accounts.zoho.com/oauth/v2/token" \
  -d "code=YOUR_AUTHORIZATION_CODE" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=YOUR_REDIRECT_URI" \
  -d "grant_type=authorization_code"
```

**Replace:**
- `YOUR_AUTHORIZATION_CODE`: The code from Step 3
- `YOUR_CLIENT_ID`: From Step 1
- `YOUR_CLIENT_SECRET`: From Step 1
- `YOUR_REDIRECT_URI`: Same as used in Step 3
- Update the accounts URL if you're not in the US data center

**Response:**
```json
{
  "access_token": "1000.xxxxx...",
  "refresh_token": "1000.xxxxx...",
  "expires_in": 3600,
  "api_domain": "https://www.zohoapis.com",
  "token_type": "Bearer"
}
```

**Save the `refresh_token`** - this is what you'll use in your `.env` file.

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# Zoho CRM Integration
ZOHO_CLIENT_ID=1000.XXXXXXXXXXXXX
ZOHO_CLIENT_SECRET=your_secret_here
ZOHO_REFRESH_TOKEN=1000.xxxxx...
ZOHO_ACCOUNTS_URL=https://accounts.zoho.com
ZOHO_API_DOMAIN=https://www.zohoapis.com
```

**Adjust the URLs** based on your data center from Step 2.

## Step 6: Test the Integration

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the API endpoint:**
   ```bash
   curl -X POST http://localhost:3000/api/zoho \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "name": "Test User",
       "userType": "renter",
       "location": "New York"
     }'
   ```

3. **Check Zoho CRM:**
   - Go to your Zoho CRM → Leads
   - You should see a new lead with the test data

## Troubleshooting

### "Invalid Client ID or Secret"
- Double-check your Client ID and Client Secret
- Make sure there are no extra spaces

### "Invalid Refresh Token"
- Refresh tokens can expire if not used for 90+ days
- Generate a new refresh token by repeating Steps 3-4

### "Invalid Grant"
- The authorization code expired (60 seconds)
- Generate a new authorization code and immediately exchange it

### Wrong Data Center
- If you see "invalid_code" errors, check your data center
- Update `ZOHO_ACCOUNTS_URL` and `ZOHO_API_DOMAIN` accordingly

### API Rate Limits
- Zoho has API rate limits (200 calls/minute by default)
- The integration uses OAuth refresh on each request (consider caching tokens in production)

## Security Best Practices

1. **Never commit `.env.local` to version control**
   - It's already in `.gitignore`

2. **Use environment variables in production**
   - Add these to Vercel/Netlify/your hosting platform's environment settings

3. **Rotate credentials periodically**
   - Regenerate Client Secret every 90 days
   - Monitor API usage in Zoho API Console

4. **Use minimal scopes**
   - Currently using `ZohoCRM.modules.ALL`
   - For production, consider `ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ`

## Advanced: Token Caching (Optional)

For production, consider caching access tokens to reduce API calls:

```typescript
// Example token cache implementation
let cachedToken: { token: string; expiresAt: number } | null = null;

async function getZohoAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  // Fetch new token...
  const token = await fetchNewToken();
  cachedToken = {
    token,
    expiresAt: Date.now() + 3600000 // 1 hour
  };

  return token;
}
```

## Resources

- [Zoho CRM API Documentation](https://www.zoho.com/crm/developer/docs/api/v2/)
- [Zoho OAuth 2.0 Guide](https://www.zoho.com/crm/developer/docs/api/v2/oauth-overview.html)
- [Zoho API Console](https://api-console.zoho.com/)
- [API Rate Limits](https://www.zoho.com/crm/developer/docs/api/v2/api-limits.html)
