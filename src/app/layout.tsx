import "../../styles/globals.css";
import Link from "next/link";
import { SeoConfig } from "@/components/layout/SeoConfig";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <SeoConfig />
      </head>
      <body>
        <header>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>
          <div>
            <h1>WJG</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
