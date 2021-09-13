import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      image {
        file {
          url
        }
      }
      body {
        raw
      }
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <img src={props.data.contentfulBlogPost.image.file.url} />
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw)
      )}
    </Layout>
  )
}

export default Blog
