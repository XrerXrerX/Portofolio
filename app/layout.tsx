/** @format */

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diki Hidayatullah | All in One Solution",
  description:
    "Portfolio of Diki Hidayatullah: DevOps, System, Cloud and Full Stack Engineer with 5+ years of experience in AWS, Kubernetes, CI/CD and end-to-end application development.",
  openGraph: {
    title: "Diki Hidayatullah | DevOps , System Engineer , Cloud Engineer & FullStack Developer",
    description:
      "DevOps, System, Cloud and Full Stack Engineer with 5+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
