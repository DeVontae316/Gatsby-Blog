import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        {" "}
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navigation}>
          <li>
            <Link to="/" activeClassName={headerStyles.active}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={headerStyles.active}>
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact" activeClassName={headerStyles.active}>
              Contact
            </Link>{" "}
          </li>
          <li>
            <Link to="/blog" activeClassName={headerStyles.active}>
              Blog
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
