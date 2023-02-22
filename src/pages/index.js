/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file index.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Layout from "@/components/layout";
import Link from "next/link";

export default function Home()
{
  return (
    <>
      <Layout
        title={'Home'}
        description={'Art gallery for curious minds'}>
        <h1>Hola</h1>

        <Link href='us'>Link</Link>
      </Layout>
    </>
  )
}
