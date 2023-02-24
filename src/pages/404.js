/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file 404.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 24th February 2023
 */

import Layout from "@/components/layout";
import Link from "next/link";

export default function Page404()
{
    return (
        <Layout
            title="Page not found">

            <p className="error">Error page not found</p>

            <Link href="/" legacyBehavior>
                <a className="link-error">
                    Back to home
                </a>
            </Link>
        </Layout>
    )
}
