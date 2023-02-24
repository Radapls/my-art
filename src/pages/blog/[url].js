/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file [url].js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 24th February 2023
 */

import Layout from "@/components/layout";
import Image from "next/image";
import { formatDate } from "utils/helpers";
import styles from "../../styles/blog.module.css";


export default function Post({ post })
{
    const { title, content, image, publishedAt } = post[ 0 ].attributes
    return (
        <Layout
            title={title}>
            <article className={`${styles.post} ${styles.mt}`}>
                <Image
                    src={image.data.attributes.url}
                    alt={`Post: ${title}`}
                    width={1000}
                    height={500}
                />

                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p className={styles.date}>{formatDate(publishedAt)}</p>
                    <p className={styles.text}>{content}</p>
                </div>

            </article>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } })
{
    const response = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=image`)
    const { data: post } = await response.json()


    if (!post.length)
    {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post
        }
    }
}