/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file shopping-cart.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 24th February 2023
 */

import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/cart.module.css";


export default function ShoppingCart({ cart })
{
    return (
        <Layout
            title="Shopping Cart">

            <main className="container">
                <h1 className="heading">Shopping Cart</h1>
            </main>

            <div className={styles.content}>

                <div className={styles.cart}>
                    <h2>Articles</h2>
                    {cart.length === 0 ? 'The cart is empty' : (
                        cart.map(product => (
                            <div
                                key={product.id}
                                className={styles.product}>

                                <div>
                                    <Image width={250} height={480} src={product.image} alt={product.name} />
                                </div>
                                <div>
                                    <p className={styles.name}>{product.name}</p>
                                    <p className={styles.price}>$<span>{product.price}</span></p>
                                    <p className={styles.subtotal}>Subtotal: <span>{product.quantity * product.price}</span></p>
                                </div>

                            </div>
                        ))
                    )}
                </div>

                <aside className={styles.resume} >
                    <h3>Resume</h3>
                    <p>Total value</p>
                </aside>
            </div>

        </Layout>

    )
}
