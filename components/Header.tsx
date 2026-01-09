"use client";
import Link from "next/link";
import logo from "@/public/images/main/logo-minor-bugs.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavItemProps, NavItems, SubMenuItem } from "@/public/data/home.data";
import PrimaryBtn from "@/components/PrimaryBtn";
import LoginModal from "./LoginModal";

interface HeaderProps {
    sidebar: boolean;
    setSidebar: (open: boolean) => void;
}

const Header = ({ sidebar, setSidebar }: HeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            if (window.scrollY > 50) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const path = usePathname();

    // Helper function to check if current path matches nav item
    const isActive = (navItem: NavItemProps | SubMenuItem): boolean => {
        if (navItem.href && path === navItem.href) return true;
        if (navItem.subItems) {
            return navItem.subItems.some((subItem) => isActive(subItem));
        }
        return false;
    };

    // Render navigation items recursively
    const renderNavItem = (
        navItem: NavItemProps | SubMenuItem,
        index: number,
        isSubItem = false
    ) => {
        const hasSubItems = navItem.subItems && navItem.subItems.length > 0;
        const active = isActive(navItem);

        if (hasSubItems) {
            return (
                <li
                    key={index}
                    className={`dropdown show-dropdown ${isSubItem ? "sub-dropdown" : ""}`}
                >
                    <button
                        type="button"
                        aria-label="Navbar Dropdown Button"
                        className={`dropdown-toggle ${
                            isSubItem ? "dropdown-item" : "dropdown-nav"
                        } ${active ? "active" : ""}`}
                    >
                        {navItem.label}
                    </button>
                    <ul className={`${isSubItem ? "sub sub-menu dropend" : "dropdown-menu"}`}>
                        {navItem.subItems!.map((subItem, subIndex) =>
                            renderNavItem(subItem, subIndex, true)
                        )}
                    </ul>
                </li>
            );
        }

        if (isSubItem) {
            return (
                <li key={index}>
                    <Link className="dropdown-item" href={navItem.href || "#"}>
                        {navItem.label}
                    </Link>
                </li>
            );
        }

        return (
            <li key={index}>
                <Link
                    className={`dropdown-nav ${active ? "active" : ""}`}
                    href={navItem.href || "#"}
                >
                    {navItem.label}
                </Link>
            </li>
        );
    };

    return (
        <>
            {/* Scroll To Top */}
            <button
                onClick={scrollToTop}
                className={`scrollToTop d-none d-md-flex d-center ${scrolled && "active"}`}
                aria-label="scroll Bar Button"
            >
                Back To Top
            </button>

            {/* Custom Cursor */}
            <div className="mouse-follower">
                <span className="cursor-outline"></span>
                <span className="cursor-dot"></span>
            </div>

            {/* Header Section */}
            <header
                className={`header-section header-menu ${
                    headerFixed && "animated fadeInDown header-fixed"
                }`}
            >
                <nav className="navbar w-100 flex-nowrap ps-xl-6 ps-xxl-20 navbar-expand-xl">
                    {/* Desktop Logo */}
                    <Link
                        href="/"
                        className="navbar-brand d-none d-md-block px-xl-5 d-flex align-items-center gap-2"
                    >
                        <Image
                            src={logo}
                            width={350}
                            height={90}
                            className="logo-text d-xxl-block"
                            alt="logo-text"
                        />
                    </Link>

                    {/* Mobile Logo */}
                    <Link
                        href="/"
                        className="navbar-brand d-md-none ms-xxl-15 d-flex align-items-center gap-2"
                    >
                        <Image
                            src={logo}
                            width={200}
                            height={70}
                            className="logo-text d-xxl-block"
                            alt="logo-text"
                        />
                    </Link>

                    <div
                        className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2"
                        id="navbar-content"
                    >
                        {/* Navigation Menu */}
                        <ul className="navbar-nav d-xl-flex d-none gap-6 py-4 py-lg-0 m-auto pe-20 align-self-center">
                            {NavItems.map((item, index) => renderNavItem(item, index))}
                        </ul>

                        {/* Right Area */}
                        <div className="right-area position-relative d-flex gap-3 gap-xxl-6 align-items-center">
                            {/* Mobile Menu Toggle */}
                            <div className="sidebar-close mobile-menu">
                                <button
                                    onClick={() => setSidebar(!sidebar)}
                                    className="d-center d-grid d-xl-none"
                                    type="button"
                                    aria-label="Toggle Mobile Menu"
                                >
                                    <i className="material-symbols-outlined mat-icon fs-four">
                                        menu_open
                                    </i>
                                    <span className="fs-six">MENU</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Contact Button */}
                    <div className="d-none d-xl-block px-xl-5">
                        <PrimaryBtn text="Contact" href="/contact" />
                    </div>
                </nav>
            </header>

            {/* Login Modal */}
            <LoginModal />
        </>
    );
};

export default Header;