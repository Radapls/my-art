/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file footer.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Link from "next/link";
import styles from "../styles/footer.module.css";


export default function Footer()
{
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>

                <nav className={styles.nav} >
                    <Link href="/" legacyBehavior>
                        Home

                    </Link>
                    <Link href="/us" legacyBehavior>
                        About us

                    </Link>
                    <Link href="/blog" legacyBehavior>
                        Blog

                    </Link>
                    <Link href="/store" legacyBehavior>
                        Store
                    </Link>
                </nav>

                <p className={styles.copyright}>All rights Reserved {new Date().getFullYear()}</p>

            </div>
        </footer>
    )
}
