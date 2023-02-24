/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file post.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 24th February 2023
 */

import Image from "next/image";
import Link from "next/link";
import { formatDate } from "utils/helpers";
import styles from "../styles/blog.module.css";


export default function Post({ post })
{
    const { content, image, title, url, publishedAt } = post

    return (
        <article>
            <Image
                src={image.data.attributes.formats.small.url}
                alt={`Post: ${title}`}
                width={500}
                height={500}
            />

            <div className={styles.content}>
                <h2>{title}</h2>
                <p className={styles.date}>{formatDate(publishedAt)}</p>
                <p className={styles.resume}>{content}</p>

                <Link href={`/blog/${url}`} legacyBehavior>
                    <a className={styles.link}> Read Post</a>
                </Link>
            </div>

        </article>
    )
}
