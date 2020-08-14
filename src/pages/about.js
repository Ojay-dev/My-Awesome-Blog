import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <h1>This is the about page</h1>
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
