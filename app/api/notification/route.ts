import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { network, wallet_address, coin_type, amount } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.APP_PASSWORD,
    },
  });

  try {
    const transactionDetails = {
      network: network,
      walletAddress: wallet_address,
      coinType: coin_type,
      amount: amount,
    };

    const transactionInfo = `
    Deposit Details:
    -----------------
    Network: ${transactionDetails.network}
    Wallet Address: ${transactionDetails.walletAddress}
    Coin Type: ${transactionDetails.coinType}
    Amount: ${transactionDetails.amount}
  `;

    const mailOptions = {
      from: `Emmanuel Ibiang <manuelscript65@gmail.com>`,
      to: "support@eloquentexchange.org",
      subject: "New Transaction",
      text: transactionInfo,
    };

    await transporter.sendMail(mailOptions);

    console.log("Notification email sent successfully");
  } catch (error) {
    console.error("Error sending notification email:", error);
  }
}
