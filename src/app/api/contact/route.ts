import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    await transporter.sendMail({
      from: `"Mandel Moving Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px;font-weight:bold;width:140px">Name</td><td style="padding:8px">${name}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email || '—'}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Service</td><td style="padding:8px">${service}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px">${message || '—'}</td></tr>
        </table>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
