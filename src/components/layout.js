/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file layout.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, title = '', description = '' })
{
    return (
        <>
            <Head>
                <title>{`My art - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>

            <Header />

            {children}

            <Footer />
        </>
    )
}
