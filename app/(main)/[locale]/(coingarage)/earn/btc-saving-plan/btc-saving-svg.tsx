"use client"

import { useTranslations } from "next-intl"

export default function BtcSavingsSvg() {
  const t = useTranslations("eezy-trader.BtcSaving")
  return (
    <svg className="w-[100%] rounded-xlg bg-card" viewBox="0 0 661 507" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M185.108 174.166L159 195.943" stroke="#00ABFE" strokeWidth="2" strokeLinecap="round" />
      <path d="M229 301.456L254.456 276" stroke="#3FCC88" strokeWidth="2" strokeLinecap="round" />
      <path d="M295 360L323.284 388.284" stroke="#3FCC88" strokeWidth="2" strokeLinecap="round" />
      <path d="M473 243L440 222" stroke="#00ABFE" strokeWidth="2" strokeLinecap="round" />
      <path d="M247.5 269L210 269" stroke="white" strokeOpacity="0.5" strokeDasharray="5 5" />
      <path d="M318 396L280 396" stroke="white" strokeOpacity="0.5" strokeDasharray="5 5" />
      <line x1="554.5" y1="114" x2="554.5" y2="444" stroke="white" />
      <line x1="85.5" y1="115" x2="85.5" y2="445" stroke="white" />
      <line x1="481.5" y1="114" x2="481.5" y2="444" stroke="white" strokeOpacity="0.1" />
      <line x1="85" y1="404.5" x2="555" y2="404.5" stroke="white" strokeOpacity="0.1" />
      <line x1="85" y1="277.5" x2="555" y2="277.5" stroke="white" strokeOpacity="0.1" />
      <line x1="85" y1="213.5" x2="555" y2="213.5" stroke="white" strokeOpacity="0.1" />
      <path d="M85 149L555 149" stroke="white" strokeOpacity="0.1" />
      <line x1="85" y1="341.5" x2="555" y2="341.5" stroke="white" strokeOpacity="0.1" />
      <line x1="319.5" y1="114" x2="319.5" y2="444" stroke="white" strokeOpacity="0.1" />
      <line x1="400.5" y1="114" x2="400.5" y2="444" stroke="white" strokeOpacity="0.1" />
      <line x1="157.5" y1="114" x2="157.5" y2="444" stroke="white" strokeOpacity="0.1" />
      <line x1="238.5" y1="114" x2="238.5" y2="444" stroke="white" strokeOpacity="0.1" />
      <path d="M85.5 444.5L555 444.5" stroke="white" />
      <text fill="#00ABFE" style={{ fontSize: "15", fontWeight: "bold" }}>
        <tspan x="190" y="171.8">
          {t("extraDCA.graph.dcaBuy")}
        </tspan>
      </text>
      <text textAnchor="end" fill="#00ABFE" style={{ fontSize: "15", fontWeight: "bold" }}>
        <tspan x="434" y="226">
          {t("extraDCA.graph.dcaBuy")}
        </tspan>
      </text>
      <text stroke="#040816" strokeWidth={15} style={{ fontSize: "15", fontWeight: "bold" }}>
        <tspan x="222" y="309.8" textAnchor="end">
          {t("extraDCA.graph.dcaExtraBuy")} $100
        </tspan>
      </text>
      <text fill="#3FCC88" style={{ fontSize: "15", fontWeight: "bold" }}>
        <tspan x="222" y="309.8" textAnchor="end">
          {t("extraDCA.graph.dcaExtraBuy")} $100
        </tspan>
      </text>
      <text fill="#3FCC88" style={{ fontSize: "15", fontWeight: "bold" }}>
        <tspan x="284" y="364.8" textAnchor="end">
          {t("extraDCA.graph.dcaExtraBuy")} $200
        </tspan>
      </text>
      <path
        d="M138 166.5L163 230.5L218.5 188L271.5 293L288 248L341 429L369.595 281.509L401.5 351L430 303.5L458.5 351L483 234.5L508 280L553.5 149.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text fill="#FF1F70" style={{ fontSize: "15", fontWeight: "bold" }}>
        <tspan x="165" y="270.7">
          -10%
        </tspan>
      </text>
      <text fill="#FF1F70" style={{ fontSize: "15", fontWeight: "bold" }}>
        <tspan x="238" y="398.7">
          -20%
        </tspan>
      </text>

      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="573" y="217.7">
          $10,000
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="574" y="153.7">
          $11,000
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="316" y="464.7">
          {t("extraDCA.graph.weeks.week3")}
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="150.021" y="464.7">
          {t("extraDCA.graph.weeks.week1")}
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="393.021" y="464.7">
          {t("extraDCA.graph.weeks.week4")}
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="231.021" y="464.7">
          {t("extraDCA.graph.weeks.week2")}{" "}
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="472.021" y="464.7">
          {t("extraDCA.graph.weeks.week5")}
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="573" y="281.7">
          $9,000
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="573" y="344.7">
          $8,000
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }}>
        <tspan x="573" y="408.7">
          $7,000
        </tspan>
      </text>
      <text fill="white" fillOpacity="0.35" style={{ fontSize: "12" }}>
        <tspan x="85" y="464.6">
          {t("extraDCA.graph.time")}
        </tspan>
      </text>
      <text fill="white" fillOpacity="0.35" style={{ fontSize: "12" }}>
        <tspan x="570" y="121.6">
          {t("extraDCA.graph.price")}
        </tspan>
      </text>
      <rect x="147" y="197" width="8" height="8" rx="4" fill="#00ABFE" />
      <rect x="257" y="266" width="8" height="8" rx="4" fill="#3FCC88" />
      <rect x="326" y="389" width="8" height="8" rx="4" fill="#3FCC88" />
      <rect x="477" y="239" width="8" height="8" rx="4" fill="#00ABFE" />
      <rect x="548" y="143" width="12" height="12" rx="6" fill="#3FCC88" />
      <path d="M85 114.5L554 114.5" stroke="white" />
      <rect
        x="86"
        y="62"
        width="157"
        height="34"
        rx="9"
        fill="#00ABFE"
        fillOpacity="0.1"
        stroke="#00ABFE"
        strokeWidth="2"
      />
      <rect
        x="397"
        y="62"
        width="157"
        height="34"
        rx="9"
        fill="#3FCC88"
        fillOpacity="0.1"
        stroke="#3FCC88"
        strokeWidth="2"
      />
      <text fill="#00ABFE" style={{ fontSize: "18" }} fontWeight="bold">
        <tspan x="124" y="85">
          +12.24%
        </tspan>
      </text>
      <text fill="#3FCC88" style={{ fontSize: "18" }} fontWeight="bold">
        <tspan x="435" y="85">
          +26.84%
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }} fontWeight="bold">
        <tspan x="164" y="49.7" textAnchor="middle">
          {t("extraDCA.graph.classicDCA")}
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "14" }} fontWeight="bold">
        <tspan x="475" y="49.7" textAnchor="middle">
          {t("extraDCA.graph.dcaExtra")}
        </tspan>
      </text>
      <text fill="white" style={{ fontSize: "20" }} fontWeight="bold">
        <tspan x="307" y="85">
          VS
        </tspan>
      </text>
      <line x1="251" y1="79.5" x2="293" y2="79.5" stroke="white" />
      <line x1="343" y1="79.5" x2="385" y2="79.5" stroke="white" />
      <defs>
        <filter
          id="filter0_d_238_57"
          x="0"
          y="0"
          width="661"
          height="507"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_57" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_57" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}
