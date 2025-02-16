// "use server"
// import { Logger, TelegramClient } from "telegram"
// import { LogLevel } from "telegram/extensions/Logger"
// import { StringSession } from "telegram/sessions"

// const TELEGRAM_API_ID = process.env.TELEGRAM_API_ID || 0
// const TELEGRAM_API_HASH = process.env.TELEGRAM_API_HASH || ""
// const TELEGRAM_STRING_SESSION = process.env.TELEGRAM_STRING_SESSION

// const session = new StringSession(TELEGRAM_STRING_SESSION)
// const client = new TelegramClient(session, Number(TELEGRAM_API_ID), TELEGRAM_API_HASH, {
//   baseLogger: new Logger(LogLevel.ERROR),
// })

// export async function fetchNews() {
//   try {
//     await client.connect().catch((error) => {
//       console.log(error)
//     })

//     if (client?.session) {
//       const messages = []
//       for await (const message of client.iterMessages("www_Bitcoin_com", {
//         limit: 3,
//       })) {
//         const rawText = message.text
//         const text = rawText.split(" […]\n")[0]
//         const url = rawText.match(/(https?:\/\/[^\s]+)/g)?.[0]
//         messages.push({ id: message.id, timestamp: new Date(message.date * 1000)?.toISOString(), text, url })
//       }
//       return messages
//     } else {
//       throw new Error("Telegram client not connected")
//     }
//   } catch (error) {
//     console.log(error)
//     return []
//   }
// }
