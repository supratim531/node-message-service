import twilio from "twilio";

const authToken = "56a877a34f54ab4da643292f49d6ce22";
const accountSid = "AC574ad5d5fc70b84579270193b244ff19";

const client = twilio(accountSid, authToken);

const sendSMS = async (from, to, body) => {
  try {
    const res = await client.messages.create({
      from: from,
      to: to,
      body: body
    });

    console.log({ res });
  } catch (err) {
    console.log({ err });
  }
}

sendSMS("+15106810444", "+918981702261", "Your verification code is: 265897");
