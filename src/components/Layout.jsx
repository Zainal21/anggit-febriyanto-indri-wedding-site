import React from 'react'
import '../styles/global.css'
import { GlobalStyles } from 'twin.macro'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import SimpleReactLightbox from 'simple-react-lightbox'

const Layout = ({ children, ...rest }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const metaDescription = site.siteMetadata?.description
  const defaultTitle = site.siteMetadata?.title
  return (
    <SimpleReactLightbox>
      <div {...rest}>
        <Helmet
          title={defaultTitle}
          titleTemplate={defaultTitle}
          meta={[
            {
              name: `description`,
              content: metaDescription
            },
            {
              property: `og:title`,
              content: defaultTitle
            },
            {
              property: `og:description`,
              content: metaDescription
            },
            {
              property: `og:type`,
              content: `website`
            },
            {
              name: `twitter:card`,
              content: `summary`
            },
            {
              name: `twitter:creator`,
              content: site.siteMetadata?.author || ``
            },
            {
              name: `twitter:title`,
              content: defaultTitle
            },
            {
              name: `twitter:description`,
              content: metaDescription
            }
          ]}
        >
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,user-scalable=no"
          />
          <meta name="robots" content="NOODP" />
          <meta name="theme-color" content="#eeeeee" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
        </Helmet>
        <GlobalStyles />
        {children}
      </div>
    </SimpleReactLightbox>
  )
}

export default Layout
