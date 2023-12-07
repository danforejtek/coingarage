"use server"

import React from "react"

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="mt-6">{children}</p>
}

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="mt-12 font-heading text-2xl">{children}</h2>
}

const Components = {
  paragraph: Paragraph,
  heading: Heading,
}

const renderer = async ({ block, index }: { block: { type: string; content: any }; index: number }) => {
  const { type, content } = block
  // @ts-ignore
  if (typeof Components[type] !== "undefined") {
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
