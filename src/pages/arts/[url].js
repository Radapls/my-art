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
import styles from "../../styles/art.module.css";


export default function Product({ art })
{

    const { name, description, image, price } = art[ 0 ].attributes

    return (
        <Layout
            title={`Art piece - ${name}`}>
            <div className={styles.box}>
                <div className={styles.art}>
                    <Image
                        src={image.data.attributes.url}
                        alt={`Art ${name}`}
                        width={1000}
                        height={1000}
                    />

                    <div className={styles.content}>
                        <h3 >{name}</h3>
                        <p className={styles.description} >{description}</p>
                        <p className={styles.price}>${price}</p>

                    </div>
                </div>
            </div>

        </Layout>

    )
}


export async function getServerSideProps({ query: { url } })
{
    const response = await fetch(`${process.env.API_URL}/arts?filters[url]=${url}&populate=image`)
    const { data: art } = await response.json()


    if (!art.length)
    {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            art
        }
    }
}
