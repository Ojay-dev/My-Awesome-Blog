import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Title from "../components/title"

export default () => {
  return (
    <Layout>
      <Title text="About me" />
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
