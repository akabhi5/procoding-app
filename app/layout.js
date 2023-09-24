import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { Alata } from "next/font/google";

const alata = Alata({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "ProCoding | Learn to Code, Data Structures and Algorithms",
  description:
    "Learn Python, Data Structures, C, Java, JavaScript, Django and other programming languages and frameworks with code examples, articles and latest updates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alata.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
