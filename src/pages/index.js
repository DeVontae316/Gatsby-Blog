import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello I'm DeVontae</h1>
      <img
        style={{
          width: 550,
          height: 700,
        }}
        src={"/tae.jpg"}
        alt="Developer"
      />
      <p>I'm a software developer with a passion for learning!</p>
    </Layout>
  )
}
