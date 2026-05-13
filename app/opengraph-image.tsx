import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elton Sakyi · Software Engineer · Backend & Platform Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0c",
          padding: 72,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* top meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#a1a1aa",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <div style={{ width: 36, height: 2, background: "#e8a96b" }} />
          Software Engineer · Backend & Platform
        </div>

        {/* name */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 168,
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: -8,
              fontFamily: "serif",
              display: "flex",
            }}
          >
            Elton Sakyi<span style={{ color: "#e8a96b" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: "#a1a1aa",
              maxWidth: 1000,
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            I build secure, multi-role platforms. Not just features.
          </div>
        </div>

        {/* bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#71717a",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>Winthrop University · United States</div>
          <div style={{ display: "flex", color: "#e8a96b" }}>
            eltonsakyi.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
