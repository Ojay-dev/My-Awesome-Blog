import React from "react"
import { Link } from "gatsby"
import styles from "./article.module.scss"

export default props => (
  <article className={styles.articleBox} key={props.id}>
    <div className={styles.left}>
      <img
        src={`https://source.unsplash.com/150x150/? ${props.keyword}`}
        alt={props.keyword}
      />
    </div>
    <div>
      <div className={styles.right}>
        <h3>{props.title}</h3>
        <div className={styles.date}>{props.date}</div>
      </div>
      <div>{props.excerpt}</div>
      <Link to={props.to} className={styles.link}>
        Continue Reading...
      </Link>
    </div>
  </article>
)
