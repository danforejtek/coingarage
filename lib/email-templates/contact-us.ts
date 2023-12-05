export function contactUs({ content }: { content: string }) {
  return `
  <html>
  <h1>Question from customer</h1>
    <div>
      <p>${content}</p>
    </div>
  </html>
  `
}
