import type { Metadata } from "next";
import "@/css/index.css";

export const metadata: Metadata = {
  title: "Min Next.js-app",
  description: "Laget med Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
