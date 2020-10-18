import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Capitols from "../components/capitols/CapitolsMain"

const CapitolsPage = () => (
    <Layout page={'Capitols'}>
        <SEO title='Capitols' />
        <Capitols />
    </Layout>
)

export default CapitolsPage