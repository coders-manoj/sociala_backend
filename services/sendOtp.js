import nodemailer from "nodemailer";

const sendOtp = async (userEmail, otp) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${process.env.USER_NAME}"
     ${process.env.USER_EMAIL}`,
    to: userEmail,
    subject: "Reset Password",
    html: `<div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>Welcome to the club.</h2>
        <h4>You are officially In ✔</h4>
        <p style="margin-bottom: 30px;">
          Pleas enter the sign up OTP to get started
        </p>
        <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">
          ${otp}
        </h1>
      </div>`,
  });
};

export default sendOtp;
