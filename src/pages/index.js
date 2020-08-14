import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h1>This is the index page</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non a
        nec proin sed bibendum semper lectus.
      </p>
    </Layout>
  )
}
