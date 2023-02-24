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

import Art from "@/components/art";
import Course from "@/components/course";
import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "../styles/grid.module.css";


export default function Home({ art, post, course })
{
  return (
    <>
      <Layout
        title={'Home'}
        description={'Art gallery for curious minds'}>

        <main className="container">
          <h1 className="heading">Our collection</h1>

          <div className={styles.grid} >
            {art?.map(art => (
              <Art
                key={art.id}
                art={art.attributes} />
            ))}
          </div>

        </main>

        <Course
          course={course} />

        <section className="container">
          <h2 className="heading">Blog</h2>

          <div className={styles.grid}>
            {post?.map(post => (

              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps()
{
  const urlArt = `${process.env.API_URL}/arts?populate=image`
  const urlBlog = `${process.env.API_URL}/blogs?populate=image`
  const urlCourse = `${process.env.API_URL}/course?populate=image`

  const [ resArt, resBlog, resCourse ] = await Promise.all([
    fetch(urlArt),
    fetch(urlBlog),
    fetch(urlCourse)
  ])

  const [ { data: art }, { data: post }, { data: course } ] = await Promise.all([
    resArt.json(),
    resBlog.json(),
    resCourse.json()
  ])


  if (!art.length || !post.length)
  {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      art,
      post,
      course
    }
  }
}
