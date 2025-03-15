import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tell Me India",
  description: "Information for the Misinformed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/welcome.jpg" type="image/x-icon" />
        <link rel="shortcut icon" href="/welcome.jpg" type="image/x-icon" />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
