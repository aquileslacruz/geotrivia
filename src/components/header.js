import { Link } from "gatsby"
import React from "react"
import styles from "../styles/header.module.scss"
import logo from "../assets/logo.png"

const Header = ({page=''}) => (
  <div className={styles.header}>
    <div>
      <Link to="/" className={styles.title}>
        <img src={logo} alt='logo' className={styles.logo} />
      </Link>
    </div>
    <div className={styles.name}>
      <span>{page}</span>
    </div>
  </div>
)

export default Header
