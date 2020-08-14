import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "./404.module.scss"

export default () => {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.header}>404</h1>
        <p className={styles.errorMessage}>
          The page you are looking for does not exist.
        </p>
        <Link to="/" className={styles.link}>
          Go Home
        </Link>
      </div>
    </Layout>
  )
}
