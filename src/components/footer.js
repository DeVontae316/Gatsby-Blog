import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <div className={footerStyles.footer}>
      Created by {data.site.siteMetadata.description} ©2021
    </div>
  )
}

export default Footer
