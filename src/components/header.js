import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
)

const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
)

const SocialButton = props => {
  let style = ""
  let url = ""

  if (props.site === "twitter") {
    style = styles.buttonTwitter
    url = `https://twitter.com/${props.username}`
  } else if (props.site === "github") {
    style = styles.buttonGithub
    url = `https://github.com/${props.username}`
  } else if (props.site === "linkedin") {
    style = styles.buttonLinkedin
    url = `https://linkedin.com/${props.username}`
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <HomeButton to="/" text="Ojonugwa's Blog" />
      <SocialButton site="twitter" username="oj_redifined"/>
      <SocialButton site="github" username="ojay-dev"/>
      <SocialButton site="linkedin" username="oj_redifined"/>
    </div>

    <div className={styles.row}>
      <HeaderLink to="/" text="BLOG" />
      <HeaderLink to="/about" text="ARTICLES" />
    </div>
  </header>
)
