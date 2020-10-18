import { Link } from "gatsby"
import React from "react"
import styles from "../styles/header.module.scss"
import Image from "./image"

const Header = ({page=''}) => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">
        {/* <img src={logo} alt='logo' className={styles.logo} /> */}
        <Image src={'logo.png'} />
      </Link>
    </div>
    <div className={styles.name}>
      <span>{page}</span>
    </div>
  </div>
)

export default Header
