import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portofolio = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Portofolio</h1>
    <p>Welcome to portofolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portofolio
