/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file course.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 24th February 2023
 */

import styles from "../styles/course.module.css";


export default function Course({ course })
{
    const { content, image, title } = course.attributes

    return (
        <section className={`${styles.course}`}>
            <style jsx>
                {`.course {
                    background-image: linear-gradient(90deg, var(--primary), transparent), url(${image?.data?.attributes?.url})
                    }`}
            </style>
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <h2 className="heading">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </section>
    )
}
