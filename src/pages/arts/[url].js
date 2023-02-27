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
import { useState } from "react";
import styles from "../../styles/art.module.css";


export default function Product({ art, addToCart })
{
    const [ quantity, setQuantity ] = useState(0)

    const { name, description, image, price } = art[ 0 ].attributes


    const handleSubmit = e =>
    {
        e.preventDefault()

        if (quantity < 1)
        {
            alert('You must add 1')
            return
        }

        // Create an object for LocalStorage

        const artSelected = {
            id: art[ 0 ].id,
            image: image.data.attributes.url,
            name,
            price,
            quantity
        }

        // Passing to context
        addToCart(artSelected)


    }


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

                        <form onSubmit={handleSubmit}
                            className={styles.form}>

                            <label htmlFor="quantity">Quantity:</label>

                            <select id="quantity"
                                onChange={e => setQuantity(+e.target.value)}>
                                <option value="0">--Select--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <input type="submit" value="Add to the cart" />
                        </form>

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
