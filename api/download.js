export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, asset_slug } = req.body;
  if (!email || !asset_slug) return res.status(400).json({ error: 'Email and asset_slug required' });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const SITE_URL = process.env.SITE_URL || 'https://basefund-com.vercel.app';

  const assetNames = {
    'ch4-transaction-grouping-map': 'Transaction Grouping Map',
    'ch5-dependency-mapping': 'Dependency Mapping Exercise',
    'ch6-stage-audit': 'Stage Audit Scorecard',
    'ch6-stage-transition-checklist': 'Stage Transition Checklist Builder',
    'ch7-conductor-role': 'Transaction Coordinator Role Definition',
    'ch8-contact-gravity': 'Contact Gravity Assessment',
    'ch8-contact-governance': 'Contact Governance Checklist',
    'ch10-verification-audit': 'Verification Layer Audit',
    'ch10-contact-directory': 'Verified Contact Directory Guide',
    'ch11-provenance-audit': 'Document Provenance Audit',
    'ch11-wire-protocol': 'Wire Instruction Security Protocol',
    'ch12-rail-portfolio': 'Payment Rail Portfolio Builder',
    'ch13-insurance-scorecard': 'Insurance Readiness Scorecard',
    'ch13-fraud-playbook': 'Fraud Response Playbook',
  };

  const assetName = assetNames[asset_slug] || asset_slug;
  const downloadUrl = `${SITE_URL}/assets/${asset_slug}.zip`;

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'When Money Moves <onboarding@resend.dev>',
        to: [email],
        subject: `Your download: ${assetName}`,
        html: `<div style="font-family:Inter,system-ui,sans-serif;max-width:520px;margin:0 auto;padding:40px 20px;">
          <p style="color:#145DD0;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;margin-bottom:24px;">WHEN MONEY MOVES</p>
          <h1 style="font-family:Georgia,serif;font-size:24px;color:#111827;margin-bottom:16px;">Your ${assetName} is ready</h1>
          <p style="color:#6B7280;font-size:16px;line-height:1.6;margin-bottom:32px;">Click the button below to download your PDF and editable DOCX files.</p>
          <a href="${downloadUrl}" style="display:inline-block;background:#145DD0;color:#ffffff;font-weight:600;font-size:16px;padding:14px 28px;border-radius:8px;text-decoration:none;">Download Files</a>
          <p style="color:#9CA3AF;font-size:13px;margin-top:32px;line-height:1.5;">This resource is a companion to <em>When Money Moves</em>. Visit <a href="https://basefund.com/book" style="color:#145DD0;">basefund.com/book</a> for the full collection.</p>
          <hr style="border:none;border-top:1px solid #E5E7EB;margin:32px 0 16px;">
          <p style="color:#D1D5DB;font-size:11px;">Basefund &middot; basefund.com</p>
        </div>`,
      }),
    });
  } catch (e) {
    console.error('Resend error:', e);
  }

  return res.status(200).json({ success: true, download_url: downloadUrl });
}
