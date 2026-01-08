import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export function LayoutWrapper({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <div className="flex-1  ">{children}</div>
            <Footer />

        </>
    )
}
