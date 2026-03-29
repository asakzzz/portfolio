import Image from "next/image";
import Header from "../header";
import { JetBrains_Mono } from "next/font/google";


const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={jetbrains.className}>
      <Header />
    </main>
  );
}