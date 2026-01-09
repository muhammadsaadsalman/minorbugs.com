"use client";
import { ReactNode, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export function LayoutWrapper({ children }: { children: ReactNode }) {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <Header sidebar={sidebar} setSidebar={setSidebar} />

            <div className="flex-1">{children}</div>

            <Footer />

            {/* Sidebar Menu */}
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </>
    );
}