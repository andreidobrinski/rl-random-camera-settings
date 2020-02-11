import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { randomize } from "../components/math"

const initialState = {
  fov: null,
  distance: null,
  height: null,
  angle: null,
  stiffness: null,
  swivel: null,
  transition: null,
}

const IndexPage = () => {
  const [state, setState] = useState(initialState)

  return (
    <Layout>
      <SEO />
      <p>Generate random camera settings in Rocket League!</p>
      <p>
        Field of View: <b>{state.fov}</b>
      </p>
      <p>
        Distance: <b>{state.distance}</b>
      </p>
      <p>
        Height: <b>{state.height}</b>
      </p>
      <p>
        Angle: <b>{state.angle}</b>
      </p>
      <p>
        Stiffness: <b>{state.stiffness}</b>
      </p>
      <p>
        Swivel: <b>{state.swivel}</b>
      </p>
      <p>
        Transition: <b>{state.transition}</b>
      </p>
      <button type="button" onClick={() => setState(randomize)}>
        Randomize
      </button>
      <a style={{ marginTop: `20px` }} href="">
        How is this calculated?
      </a>
    </Layout>
  )
}

export default IndexPage
