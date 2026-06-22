import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fitness Coaching",
  description: "Premium online coaching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
