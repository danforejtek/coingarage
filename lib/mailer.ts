import { contactUs } from "@/lib/email-templates/contact-us"

const mailOptions = {
  fromName: "Coingarage",
  from: "noreply@coingarage.io",
}

export async function sendMail({
  recipients,
  subject,
  content,
}: {
  recipients: string[]
  subject: string
  content: string
}): Promise<void> {
  try {
    const response = await fetch(`https://api.brevo.com/v3/smtp/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": `${process.env.BREVO_API_KEY}`,
      },
      body: JSON.stringify({
        sender: {
          name: mailOptions.fromName,
          email: mailOptions.from,
        },
        to: recipients.map((item) => {
          return { email: item }
        }),
        bcc: [{ email: "d.forejtek@gmail.com }],
        // to: [{ email: "" }],
        subject,
        htmlContent: contactUs({ content }),
      }),
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
