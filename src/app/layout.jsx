import "./globals.css";
import { Cabin } from "next/font/google";
import MenuToggle from "./components/menu-toggle";

const cabin = Cabin({ subsets: ["latin"] });

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
      <body className={`dark ${cabin.className} flex flex-col items-center overflow-hidden`}>

        <div className="fixed top-8 right-8 z-10">
          <MenuToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
