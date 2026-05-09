import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Skillora - A LMS",
  description: "Explore || Learn || Build || Share",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
