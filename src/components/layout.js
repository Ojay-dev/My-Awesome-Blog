import React from "react"
import styles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
        {/* <Footer>
          &copy; Ojonugwa Justice Alikali {new Date().getFullYear()}
        </Footer> */}
    </>
  )
}
