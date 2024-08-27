import Image from "next/image"
import React from "react"

type Props = {}

const defaultMockData = {
  userId: 1,
  src: "/images/eezy-trader/images/graphLight.svg",
  index: 0,
  tags: ["Grid", "DCA", "LONG", "SHORT"],
}

const BestTradersResult = ({ mockData = defaultMockData }) => {
  const { src, tags } = mockData

  return (
    <div className="flex h-[201px] w-[234px] flex-col items-center justify-between border-2 border-rose-600 p-4">
      <div className="flex h-[35px] w-full justify-between">
        <div className="w-40">
          <h4>UserID</h4>
          <p className="text-primary text-[8px]">expert</p>
        </div>
        <div className="flex flex-wrap justify-end">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="w-[calc(50% - 4px)] mx-1 mb-2 h-[15px] rounded-sm bg-primary/[0.15] px-1 text-[10px] text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex h-[65x] w-[288px] w-full justify-between">
        <div>
          <p>Total PnL</p>
          <p className="text-[24px] text-[#3FCC88]">$8201.40</p>
        </div>
        <div>
          <Image src={src} height={65} width={85} alt="" className="h-[65px] object-contain" />
        </div>
      </div>

      <div className="flex h-[47px] w-full justify-between">
        <div className="text-[#738795]">
          <p>active bots</p>
          <p>ROI</p>
        </div>
        <div>
          <p>value</p>
          <p className="text-[#3FCC88]">xx.xx%</p>
        </div>
      </div>
    </div>
  )
}

export default BestTradersResult
