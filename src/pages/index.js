import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import Article from "../components/article"

export default ({ data }) => {
  return (
    <Layout>
      <Title text="Welcome" />
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non a
        nec proin sed bibendum semper lectus.
      </p>

      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
           to='/'
           keyword={node.frontmatter.keyword}
           title={node.frontmatter.title}
           date={node.frontmatter.date}
           excerpt={node.excerpt}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            date(formatString: "D MMMM YYYY")
            keyword
          }
          excerpt
        }
      }
    }
  }
`
