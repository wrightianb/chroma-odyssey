import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="" />
      <h1>{pageContext.value}</h1>
    </Layout>
  )
}
