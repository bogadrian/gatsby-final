import React from "react"
import { Link } from "gatsby"
import ImageAbout from "../components/ImageComponents/image-about"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import aboutStyle from "./styles/about.module.scss"

const About = () => {
  return (
    <Layout>
      <div className={aboutStyle.container}>
        <SEO title="About" />
        <Link to="/">Back Home</Link>
        <h1>About</h1>

        <ImageAbout />

        <div>
          <h1 style={{ marginBottom: "5rem", marginTop: "5rem" }}>
            Unconventional CV
          </h1>
          <h1>#Let me say who I am not:</h1>
          <p>I am not young</p>
          <p>I am not a senior web developer.</p>
          <p>I have no work experience in an high-tech enterprise!</p>
          <p>I used to work for a long time in another field.</p>
          <p>I am not a perfect developer. </p>
          <p>I don't have a university degree.</p>
          <h1>#Now let me say who I am:</h1>
          <p>
            I am a self-taught web developer. If you want to know what I am able
            to do, take a look at my:&nbsp;
            <Link to="./portfolio">Portfolio!</Link>
          </p>
          <p>
            I know Javascript, NodeJs, ExpressJs, MongoDb and Mongoose, ReactJs,
            React Native, Typescript, GraphQl. I can use all of this
            technologies in production applications to build interesting things.
          </p>
          <p>
            I know JavaScript good enough so far, even though I have not
            mastered it perfectly - yet!
          </p>
          <p>I am a humble person willing to learn continuously.</p>

          <p>
            Here you can get my CV: &nbsp;
            <a
              href="https://drive.google.com/file/d/1CHSdIBhrxu2HwcUcjXlgXgfcNpusSLCt/view?usp=sharing"
              dowanload="true"
              target="_blank"
              rel="noreferrer"
            >
              Download CV Bogdan Adrian
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
