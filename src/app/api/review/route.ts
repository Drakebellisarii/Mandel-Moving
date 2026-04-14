import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);

export async function POST(request: Request) {
  try {
    const { name, rating, review } = await request.json();

    await transporter.sendMail({
      from: `"Mandel Moving Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New ${rating}-Star Review${name ? ` from ${name}` : ''}`,
      html: `
        <h2>New Customer Review</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px;font-weight:bold;width:140px">Name</td><td style="padding:8px">${name || 'Anonymous'}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Rating</td><td style="padding:8px;font-size:18px;color:#2a5298">${stars(rating)} (${rating}/5)</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Review</td><td style="padding:8px">${review}</td></tr>
        </table>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Review email error:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
