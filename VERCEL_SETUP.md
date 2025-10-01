# Vercel Deployment & Environment Variables

## Add Environment Variables to Vercel

1. **Go to your Vercel project**:
   - Visit https://vercel.com/dashboard
   - Select your project (or import from GitHub)

2. **Navigate to Settings → Environment Variables**

3. **Add the following variables**:

   ```
   ZOHO_CLIENT_ID = 1000.1Z4OTMRRA64R1ZCT0BPY06HVKT2XQE
   ZOHO_CLIENT_SECRET = f839fd12b20d3b4e948197787642a46476e1b9cd82
   ZOHO_REFRESH_TOKEN = (get this from generate-zoho-token.md steps)
   ZOHO_ACCOUNTS_URL = https://accounts.zoho.com
   ZOHO_API_DOMAIN = https://www.zohoapis.com
   ```

4. **Set environment scope**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. **Optional: Rate Limiting (Upstash Redis)**:
   ```
   UPSTASH_REDIS_REST_URL = (your upstash url)
   UPSTASH_REDIS_REST_TOKEN = (your upstash token)
   ```

## Deployment Checklist

- [ ] Generate refresh token locally (see `generate-zoho-token.md`)
- [ ] Add all environment variables to Vercel
- [ ] Deploy to Vercel (`git push` or manual deploy)
- [ ] Test the API endpoint: `https://yourdomain.vercel.app/api/zoho`
- [ ] Verify leads appear in Zoho CRM

## Test Production Endpoint

```bash
curl -X POST https://your-domain.vercel.app/api/zoho \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "userType": "renter",
    "location": "New York"
  }'
```

## Notes

- **Token Caching**: Access tokens are cached in-memory for 1 hour
  - For multi-region deployments, consider using Vercel KV or Upstash Redis for distributed caching
- **Upsert Logic**: Uses Zoho v8 `/crm/v8/Leads/upsert` to prevent duplicates by email
- **UTM Tracking**: Automatically captures UTM parameters from query string
- **Last_Name**: Auto-extracted from name field (required by Zoho)

## Monitoring

Check Vercel logs for Zoho API errors:
```bash
vercel logs
```

Or use the Vercel dashboard: Project → Logs
