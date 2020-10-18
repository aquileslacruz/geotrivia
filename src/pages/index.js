import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/index.module.scss"

const Option = ({link='/', name='', img=null}) => (
  <Link to={link} className={styles.option}>
      {name}
  </Link>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.intro}>
      {`This is just a simple app where we'll be adding some Geographical trivia games and practice React.`}
      <br />
      <br />
      {`We hope you enjoy it.`}
    </div>
    <div className={styles.options}>
      <Option link='/capitols' name='Capitols' key='capitols' />
    </div>
  </Layout>
)

export default IndexPage
