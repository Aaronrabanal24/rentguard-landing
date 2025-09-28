// /api/waitlist.js
export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Vercel parses JSON body if Content-Type: application/json
    const data = req.body || {};
    // Basic required fields (match your form)
    const { fullName, email, location, consent } = data;

    if (!fullName || !email || !location || !consent) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // TODO: persist somewhere (Airtable / Supabase / email)
    // For now, just log
    console.log('Waitlist submission:', data);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Waitlist error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
