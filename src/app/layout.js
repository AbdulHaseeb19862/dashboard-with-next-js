"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header.jsx";
import Sidebar from "@/components/layout/Sidebar.jsx";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar open={open} setOpen={setOpen} />

          <div className="flex-1 flex flex-col">
            <Header open={open} setOpen={setOpen} />

            {/* Children under Header */}
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
