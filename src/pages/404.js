import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>What the he-l are you doing here?</h1>
    <h1>NICE TRY BUT THIS CAN'T BE FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">
      <h1>Go back home immediatly!</h1>
    </Link>
  </Layout>
)

export default NotFoundPage
