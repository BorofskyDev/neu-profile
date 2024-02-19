'use client'
import { useStickyNav } from "@/libs/hooks/useSticky";
import Banner from "./banner/Banner";
import NavMenu from "./nav-menu/NavMenu";

export default function Header() {
    const { navbarRef, bannerRef, isSticky } = useStickyNav()

    return (
        <header>
            <Banner ref={bannerRef} />
            <NavMenu ref={navbarRef} isSticky={isSticky} />
        </header>
    )
}