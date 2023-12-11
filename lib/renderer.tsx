import React from "react"

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="mt-6">{children}</p>
}

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="mt-12 font-heading text-2xl">{children}</h2>
}

const List = ({ children }: { children: React.ReactNode }) => {
  return <ol className="mt-6 list-outside list-decimal pl-4">{children}</ol>
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="mt-2">{children}</li>
}

const Components = {
  paragraph: Paragraph,
  heading: Heading,
  list: List,
}

const renderer = async ({ block, index }: { block: { type: string; content: any }; index: number }) => {
  const { type, content } = block
  // @ts-ignore
  if (typeof Components[type] !== "undefined") {
    if (type === "list") {
      // @ts-ignore
      return React.createElement(Components[type], {
        key: index,
        children: content.map((item: string, index: number) => {
          return <ListItem key={index}>{item}</ListItem>
        }),
      })
    }
    // @ts-ignore
    return React.createElement(Components[type], {
      key: index,
      children: content,
    })
  }
  return React.createElement(() => <div>The component {block.type} has not been created yet.</div>, {
    key: index,
  })
}

export default renderer
