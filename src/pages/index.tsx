import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` flex flex-col items-center justify-center   ${inter.className}`}
    >
      <Header />
      <Hero />
    </main>
  );
}
