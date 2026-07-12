import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#111111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="16" viewBox="0 0 100 70" fill="none">
          <path d="M2 0L38 34H24L2 14V0Z" fill="#fff" />
          <path d="M50 26L38 34H24L50 58V26Z" fill="#fff" />
          <path d="M98 0L62 34H76L98 14V0Z" fill="#fff" />
          <path d="M50 26L62 34H76L50 58V26Z" fill="#fff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
