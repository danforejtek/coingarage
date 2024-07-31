import { userDataSchema } from "@/components/form/contact-us"
import { sendMail } from "@/lib/mailer"
import { getMaxListeners } from "events"
import z from "zod"

type UserDataType = z.infer<typeof userDataSchema>

const formatUserData = (data: UserDataType) => {
  return `
    <table>
      <tbody>
      ${Object.keys(data)
        .map((key) => {
          return `
            <tr>
              <td>${key}:</td><td>${data[key as keyof typeof data]}</td>
            </tr>`
        })
        .join("<br/>")}
      </tbody>
    </table>
  `
}

export async function POST(request: Request) {
  const data = await request.json()
  const mailerResponse = await sendMail({
    recipients: process.env.NODE_ENV === "development" ? ["d.forejtek@gmail.com"] : ["office@coingarage.io"],
    subject: "Question from customer",
    content: formatUserData(data),
  })

  return Response.json({ status: "ok", mailerResponse })
}
