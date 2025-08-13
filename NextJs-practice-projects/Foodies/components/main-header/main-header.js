import Link from "next/link";
import logo from "@/assets/logo.png"
import classes from '@/components/main-header/main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "../navlink/navlink";

export default function MainHeader() {
    return <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logo} alt="logo" priority />
                Food That You Love
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}