/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 600,
      }}
    >
      <main>{children}</main>
      <footer>
        Built with{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>{" "}
        by <a href="https://andreidobrinski.com">Andrei Dobrinski</a>
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
