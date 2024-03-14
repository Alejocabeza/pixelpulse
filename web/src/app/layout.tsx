import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar, Sidebar, SidebarReverse } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Pulse",
  description: "Generate new page with design beautifuly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fff5eb] dark:bg-black dark:text-white px-[20rem]`}>
        <Navbar />
        <main className="flex flex-row gap-[2rem] h-[calc(100vh-8rem)]">
          <Sidebar />
          <div className="flex flex-col gap-[2rem] py-[2rem] w-[65%]">{children}</div>
          <SidebarReverse />
        </main>
      </body>
    </html>
  );
}
