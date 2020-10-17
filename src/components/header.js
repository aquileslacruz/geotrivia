import { Link } from "gatsby"
import React from "react"
import styles from "../styles/header.module.css"

const Header = ({title}) => (
  <div className={styles.header}>
    <div>
      <Link to="/" className={styles.title}>{title}</Link>
    </div>
  </div>
)

export default Header
