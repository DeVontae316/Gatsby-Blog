import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import * as linkStyles from "./blog.module.scss"
import Head from "../components/head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)
  return (
    console.log(data.allContentfulBlogPost.edges) || (
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={linkStyles.links}>
          {data?.allContentfulBlogPost.edges.map(obj => (
            <li>
              <Link to={`./${obj?.node.slug}`}>
                <h2 className={linkStyles.link}>{obj?.node.title}</h2>
                <p>
                  Date posted:
                  {<br></br>}
                  {obj?.node.publishedDate}
                </p>
                <p className={linkStyles.read}>read more...</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    )
  )
}

export default Blog
