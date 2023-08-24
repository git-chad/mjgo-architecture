import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gonzalez Orlando",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`dark ${inter.className} flex flex-col items-center bg-[#1e1e1c]  overflow-hidden`}>
        <nav className="z-50 fixed p-12">
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
