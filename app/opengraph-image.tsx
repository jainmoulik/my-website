import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Moulik Jain — Growth & Demand Gen Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#030507",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(93,95,239,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Radial glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "96px",
            height: "96px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #5d5fef, #7c3aed)",
            marginBottom: "32px",
            fontSize: "36px",
            fontWeight: "700",
            color: "white",
          }}
        >
          MJ
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "700",
            color: "white",
            marginBottom: "16px",
            letterSpacing: "-1px",
          }}
        >
          Moulik Jain
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "500",
            color: "#94a3b8",
            marginBottom: "8px",
          }}
        >
          Growth &amp; Demand Gen Leader · Mumbai
        </div>

        {/* Accent line */}
        <div
          style={{
            marginTop: "32px",
            width: "120px",
            height: "3px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #5d5fef, #22d3ee)",
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "#5d5fef",
            fontWeight: "500",
          }}
        >
          moulikjain.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
