import * as React from "react"
import { Link } from "gatsby"
import { Card, Icon } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { StaticImage } from "gatsby-plugin-image"
import { FB2Icon, IGIcon, TwitchIcon, TwitterIcon, YTIcon, SpotifyIcon, AudiusIcon } from '../assets/icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'antd/dist/antd.css';
import "./index.css"

const { Meta } = Card

const IndexPage = () => (
  <Layout>
    <SEO title='@izzrodeo' />
    <Card
      title={<span></span>}
      hoverable
      style={{ minWidth: 320 }}
      cover={pic()}
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Meta style={{ textAlign: 'center' }} title="IZUZU RODEO" description="A Variety Stream of content from the IZUZU RODEO Community" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {socialLink({ color: null, Icon: TwitterIcon, url: 'https://twitter.com/izzrodeo' })}
          {socialLink({ color: null, Icon: FB2Icon, url: 'https://www.facebook.com/IZZRODEO/' })}
          {socialLink({ color: null, Icon: IGIcon, url: 'https://www.instagram.com/izzrodeo/' })}
          {socialLink({ color: null, Icon: TwitchIcon, url: 'https://www.twitch.tv/izuzurodeo' })}
          {socialLink({ color: '#1DB954', Icon: SpotifyIcon, url: 'https://open.spotify.com/show/7oP3PtIhBcu0zxeEhoV1V1' })}
          {socialLink({ color: 'red', Icon: YTIcon, url: 'https://www.youtube.com/channel/UCPUaqPMKwGeIGZujEpHXrzA' })}
        </div>
      </div>
    </Card>
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

const pic = () => (
  <StaticImage
    src="../images/izzrodeo.png"
    width={300}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Great Face"
    style={{ borderRadius: '8%' }}
  />
)

const socialLink = ({ url, color, Icon }) => {
  return (
    <a href={url} className='social-link'>
      <Icon style={{ fill: color }} />
    </a>
  )
}

export default IndexPage
