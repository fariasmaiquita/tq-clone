import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { switzer } from "@/app/fonts/fonts";
import PageHeader from "@/app/components/PageHeader";
import CloneNotice from "@/app/components/CloneNotice";
import PageFooter from "@/app/components/PageFooter";

export const metadata: Metadata = {
    title: "T.Q.C | Framer Portfolio Template Clone",
    description: "A Framer Portfolio Template Clone built with Next.js and Tailwind CSS by Farias Maiquita for learning and portfolio enrichment purposes.",
    icons: {
        icon: "/img/tqc-favicon.svg",
    }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`leading-none ${switzer.className}`}>
                <PageHeader />
                {children}
                <PageFooter />
                <CloneNotice />
            </body>
        </html>
    );
}
