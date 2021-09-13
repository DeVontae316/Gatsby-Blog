import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h3>Contact page</h3>
      <a
        href="https://www.linkedin.com/in/devontae-moore-726556203"
        rel="noreferrer"
        target="_blank"
      >
        Contact me
      </a>
    </Layout>
  )
}

export default Contact
