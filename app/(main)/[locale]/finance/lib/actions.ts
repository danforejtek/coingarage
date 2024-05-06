"use server"
import { contactMeSchema } from "../components/get-more-info-form"
import { sendMail } from "@/lib/mailer"
import z from "zod"

type UserDataType = z.infer<typeof contactMeSchema>

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

export async function submitContactMeForm({ data }: { data: UserDataType }) {
  const mailerResponse = await sendMail({
    recipients: process.env.NODE_ENV === "development" ? ["d.forejtek@gmail.com"] : ["office@coingarage.io"],
    subject: `CGF: ${data.fullName} requested more info`,
    content: formatUserData(data),
  })

  if (mailerResponse.status === "error") return { status: "error" }
  return { status: "ok" }
}
