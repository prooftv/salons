import type { NextPage } from 'next'
// import { useState } from 'react'
// import ReactMapGL from 'react-map-gl'
import Layout from '@components/Layouts'

// const mapboxToken = process.env.MAPBOX_TOKEN

const Home: NextPage = (): JSX.Element => {
  // const [viewport, setViewport] = useState({
  //   latitude: -29.8586804,
  //   longitude: 31.0218404,
  //   width: '100vw',
  //   height: '100vh',
  //   zoom: 11,
  // })

  return (
    <Layout title="Home">
      <h1>Hello world</h1>
      {/* <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/prooftv/cktyh626v0ywe17scc8kkl4ul"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      >
        markers here
      </ReactMapGL> */}
    </Layout>
  )
}

export default Home
