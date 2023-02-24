/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file art.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/art.module.css";


export default function Art({ art })
{
    const { description, image, name, price, url } = art;
    return (
        <div className={styles.art}>
            <Image
                src={image.data.attributes.formats.medium.url}
                alt={`Art ${name}`}
                width={500}
                height={500}
            />

            <div className={styles.content}>
                <h3 >{name}</h3>
                <p className={styles.description} >{description}</p>
                <p className={styles.price}>${price}</p>
                <Link href={`/arts/${url}`} legacyBehavior>
                    <a className={styles.link}> See piece</a>
                </Link>
            </div>
        </div>
    )
}
