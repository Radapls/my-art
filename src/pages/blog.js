/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file blog.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "../styles/grid.module.css";


export default function Blog({ blogs })
{

    return (
        <Layout
            title={'Blog'}
            description={'Blog My art Gallery'}>

            <main className="container">
                <h1 className="heading">Blog</h1>

                <div className={styles.grid}>
                    {blogs?.map(post => (

                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>

            </main>
        </Layout>

    )
}

export async function getStaticProps()
{
    const request = await fetch(`${process.env.API_URL}/blogs?populate=image`)
    const { data: blogs } = await request.json()

    return {
        props: {
            blogs
        }
    }
}