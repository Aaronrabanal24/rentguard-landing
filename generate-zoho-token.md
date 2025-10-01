# Generate Zoho Refresh Token - Quick Guide

## Your Credentials
- **Client ID**: `1000.1Z4OTMRRA64R1ZCT0BPY06HVKT2XQE`
- **Client Secret**: `f839fd12b20d3b4e948197787642a46476e1b9cd82`

## Step 1: Get Authorization Code

Copy this URL and paste it into your browser:

```
https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL&client_id=1000.1Z4OTMRRA64R1ZCT0BPY06HVKT2XQE&response_type=code&access_type=offline&redirect_uri=http://localhost:3000
```

**What happens:**
1. Browser opens Zoho authorization page
2. Click "Accept"
3. You'll be redirected to `http://localhost:3000/?code=1000.xxxxx...`
4. **Copy the entire code from the URL** (everything after `code=`)
5. ⚠️ You have 60 seconds to use this code!

## Step 2: Exchange Code for Refresh Token

Once you have the code, run this curl command (replace `YOUR_CODE_HERE`):

```bash
curl -X POST "https://accounts.zoho.com/oauth/v2/token" \
  -d "code=YOUR_CODE_HERE" \
  -d "client_id=1000.1Z4OTMRRA64R1ZCT0BPY06HVKT2XQE" \
  -d "client_secret=f839fd12b20d3b4e948197787642a46476e1b9cd82" \
  -d "redirect_uri=http://localhost:3000" \
  -d "grant_type=authorization_code"
```

**Response will look like:**
```json
{
  "access_token": "1000.xxxxx...",
  "refresh_token": "1000.xxxxx...",
  "expires_in": 3600,
  "api_domain": "https://www.zohoapis.com",
  "token_type": "Bearer"
}
```

## Step 3: Save to .env.local

Copy the `refresh_token` from the response and create `.env.local`:

```env
ZOHO_CLIENT_ID=1000.1Z4OTMRRA64R1ZCT0BPY06HVKT2XQE
ZOHO_CLIENT_SECRET=f839fd12b20d3b4e948197787642a46476e1b9cd82
ZOHO_REFRESH_TOKEN=YOUR_REFRESH_TOKEN_HERE
ZOHO_ACCOUNTS_URL=https://accounts.zoho.com
ZOHO_API_DOMAIN=https://www.zohoapis.com
```

## Step 4: Test

```bash
npm run dev
```

Then test the API:

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

Check Zoho CRM → Leads for the new entry!
