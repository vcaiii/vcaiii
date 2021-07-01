import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icons from '../../assets/icons'

const socialLink = ({ url, org }) => {
  const Icon = Icons[org]
  return <a key={url} href={url} className='social-link'>{Icon()}</a>
}

const linkSection = ({ links }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    {links.map(s => socialLink({ url: `${s.link}${s.username}`, org: s.org }))}
  </div>
)

const expandedLinkSection = ({ section, data }) => (
  <div key={section}>
    <h4 style={{ textAlign: 'center', margin: 0 }}>
      {section[0].toUpperCase() + section.substring(1)}
    </h4>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {data.map(s => socialLink({ url: `${s.link}${s.username}`, org: s.org }))}
    </div>
  </div>
)

function LinkSection(props) {
  const { expand } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            links {
              socials {
                username
                org
                link
              }
              shop {
                username
                org
                link
              }
              stream {
                username
                org
                link
              }
            }
          }
        }
      }
    `
  )

  const { links } = site.siteMetadata
  const sections = Object.keys(links)
  const combinedLinks = [].concat(...Object.values(links))

  return (
    <>
      {!expand && linkSection({ links: combinedLinks })}
      {expand && sections.map(section => expandedLinkSection({ section, data: links[section] }))}
    </>
  )
}

export default LinkSection