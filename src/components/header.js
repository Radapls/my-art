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
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header()
{
    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>
                <Link href="/" legacyBehavior>
                    <Image src="/img/logo.png" width={300} height={300} alt='Logo' />
                </Link>

                <nav className={styles.nav} >
                    <Link href="/" legacyBehavior>
                        <a className={router.pathname === '/' ? styles.active : ''}>
                            Home
                        </a>
                    </Link>
                    <Link href="/us" legacyBehavior>
                        <a className={router.pathname === '/us' ? styles.active : ''}>
                            About us
                        </a>
                    </Link>
                    <Link href="/blog" legacyBehavior>
                        <a className={router.pathname === '/blog' ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>
                    <Link href="/store" legacyBehavior>
                        <a className={router.pathname === '/store' ? styles.active : ''}>
                            Store
                        </a>
                    </Link>
                </nav>

            </div>
        </header>
    )
}
