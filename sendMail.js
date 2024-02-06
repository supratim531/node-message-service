import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "supratimm531@gmail.com",
    pass: "wjhk qqak falw xltq"
  }
});

transporter.sendMail({
  from: "supratimm531@gmail.com",
  to: ["majumdersanjay531@gmail.com", "supratimmajumder531@gmail.com"],
  // subject: "Testing mail with nodemailer",
  // text: "Your reset password OTP is 5478",
  // html: `
  // <h1>Welcome to Node.js</h1>
  // <p>Your reset password OTP is 5478</p>
  // <h4>OR</h4>
  // <p>You can reset your password using this recovery link: https://localhost:8888/api/v1/auth/reset-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</p>
  // <hr />
  // <div>Subscribe to our <a href="https://github.com/supratim531">newsletter</a></div>
  // `,
  subject: "Email Verification",
  html: `
  <p>Verify your mail with the code below</p>
  <p style="color: tomato; font-size: 25px; letter-spacing: 2px;"><b>5789</b></p>
  <p>This code <b>expires within 15 minutes</b></p>
  `,
  // attachments: [
  //   {
  //     filename: "test.jpeg",
  //     path: "./files/test.jpeg"
  //   },
  //   {
  //     filename: "test.pdf",
  //     path: "./files/test.pdf"
  //   },
  //   {
  //     filename: "test.xlsx",
  //     path: "./files/test.xlsx"
  //   }
  // ]
}, (err, info) => {
  if (err) {
    console.log({ err });
  } else {
    console.log({ info });
  }
});
