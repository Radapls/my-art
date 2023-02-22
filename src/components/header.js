/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file header.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header()
{
    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>

                <Image src="/img/logo.png" width={300} height={300} alt='Logo' />

                <nav className={styles.nav} >
                    <Link href="/"> Home</Link>
                    <Link href="/us"> About us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Store</Link>
                </nav>

            </div>
        </header>
    )
}
