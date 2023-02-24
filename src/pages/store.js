/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file store.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import Art from "@/components/art";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";


export default function Store({ art })
{

    return (
        <Layout
            title={'Store'}
            description={'Virtual store- My Art Gallery'}>

            <main className="container">
                <h2 className="heading">
                    Our collection
                </h2>

                <div className={styles.grid} >
                    {art?.map(art => (
                        <Art
                            key={art.id}
                            art={art.attributes} />
                    ))}
                </div>

            </main>
        </Layout>

    )
}


export async function getServerSideProps()
{
    const response = await fetch(`${process.env.API_URL}/arts?populate=image`)
    const { data: art } = await response.json()

    return {
        props: {
            art
        }
    }
}