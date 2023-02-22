/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file us.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/us.module.css";


export default function Us()
{
    return (
        <Layout
            title={'About us'}
            description={'About My art Gallery'}>

            <main className="container">
                <h2 className="heading">About us</h2>

                <div className={styles.content}>
                    <Image src="/img/7.png" width={1000} height={800} alt="About us" />
                    <div>
                        <p>dasdasdasdas</p>
                        <p>dasdasdasdas</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
