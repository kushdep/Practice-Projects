import Link from "next/link";
import logo from "@/assets/logo.png"
import classes from '@/components/main-header/main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

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
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}