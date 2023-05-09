import React from "react";
import "./theme/globals.css";
import localFont from "next/font/local";

const amisProFont = localFont({
  src: [
    {
      path: "./assets/fonts/amsi-pro/AmsiProNarw-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/amsi-pro/AmsiPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/amsi-pro/AmsiPro-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-amis-pro",
});

export const metadata = {
  title: "Fight24",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${amisProFont.variable} font-sans bg-base-black`}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
