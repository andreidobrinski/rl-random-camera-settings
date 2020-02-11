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
      <p>Field of View: {state.fov}</p>
      <p>Distance: {state.distance}</p>
      <p>Height: {state.height}</p>
      <p>Angle: {state.angle}</p>
      <p>Stiffness: {state.stiffness}</p>
      <p>Swivel: {state.swivel}</p>
      <p>Transition: {state.transition}</p>
      <button type="button" onClick={() => setState(randomize)}>
        Randomize
      </button>
    </Layout>
  )
}

export default IndexPage
