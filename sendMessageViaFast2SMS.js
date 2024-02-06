import fast2sms from "fast-two-sms";

const sendSMS = async () => {
  try {
    const res = await fast2sms.sendMessage({
      authorization: "sXheHZabr3uwJ2d69t1fpzlW4m5MkQFNvqAcUyLYoP0nDRg87Sojs3lmwhCX2qTBKNfRa8AIvrMHYpVQ",
      message: "Your OTP is 5784",
      numbers: [9163681672, 8981702261]
    });

    console.log({ res });
  } catch (err) {
    console.log({ err });
  }
}

sendSMS();
