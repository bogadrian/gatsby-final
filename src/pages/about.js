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
          <p>I have no enterprise high tech work experience!</p>
          <p>I used to work for a long time in another field.</p>
          <p>I am not a perfect developer, probably not very good also! </p>
          <p>I don't have a university degree.</p>
          <h1>#Now let me say who I am:</h1>
          <p>I am a self-taught web developer.</p>
          <p>
            I know Javascript, NodeJs, ExpressJs, MongoDb and Mongoose, ReactJs.
            I can use all of this technologies in production applications to
            build intresting thinghs.
          </p>
          <p>
            I know JavaScript good enough so far, even though I have not
            mastered it perfectly - yet!
          </p>
          <p>
            I am a humble person willing to learn and take orders from younger
            people. All I know I’ve learned from younger than me instructors.
          </p>
          <p>
            I do not pretend I will be the best one day, I don not dream at some
            job at Google or facebbok. Because I am old enough to know well that
            is not going to happen.
          </p>
          <p>
            I do not search for the best web developer position because I do not
            think I am so good to deserve it in anyway.
          </p>
          <p>
            If you want to know what I am able to do, take a look at my
            portfolio!
          </p>
        </div>

        <p>Welcome to about</p>
      </div>
    </Layout>
  )
}

export default About
