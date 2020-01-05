import React from "react"

import Layout from "../components/layout/layout"
import ImageIndex from "../components/ImageComponents/image-index"
import SEO from "../components/seo"
//import indexStyle from "./index.module.scss"
import Features from "../components/features/features"
import BlogPosts3 from "../components/3blogPosts/blogPosts"
import indexStyle from "./styles/index.module.scss"
import Button from "../components/button/button"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ImageIndex />
      <div>
        <div>
          <h1 style={{ marginTop: "5rem" }}>'Hello World' </h1>
          <div
            style={{
              color: "#9F3659",
              padding: 0,
              backgroundColor: "#FAF5F7",
              fontWeight: "bold",
            }}
          >
            <p>
              My name is Adrian. I am a full stack web developer. I start
              learning to code at the end of 2017. Before that I only used
              Wordpress tom build websites.
            </p>
            <p>
              I know Wordpress from 2007, since it had to be installed manually.
              I always believed that Wordpress is enough. It allows everybody to
              build wonderful sites. But one day I had to do more than Wordpress
              allowed me to do. I had to choose between learning PHP and build
              my own plugin for Wordpress, or learn Javascript.
            </p>
            <p>
              I start learning JavaScript and never stopped ever since. My
              programming language is JavaScript.
            </p>
            <p>
              My stack is NodeJs, ExpressJs, MondoDb, ReactJs. The MERN stack,
              as it is usually named. I am self-taught developer. I learned
              mostly from Udemy. In the beginning. When I felt pretty
              comfortable understanding documentation, I went trough ExpressJs,
              Mongoose, ReactJs documentation.
            </p>
            <p>
              As I built this site with GatsbyJs, I had to say that my CSS
              skills are not at the maximum. I can write CSS, but I am not a
              guru on it. I learned CSS because since I learned React I
              discovered the hard way that the components need to be styled.
              Before I used Bootstrap to style my Vanilla JS application but now
              I write my own CSS.
            </p>
            <p>
              I am now able to build any kind of full stack web application. Of
              course, more complicate this is, the more time I need to put it
              together.
            </p>
            <p>
              I can’t believe what a long way I came since 2017. And there is a
              lot in front of me yet to come. I’d like to master GraphQl now. I
              am now building a pretty complex app on MERN stack.
            </p>
            <p>When it will be ready, you may find it in my portfolio!</p>
            <p>
              You can reach out to me if you want at
              bogdan4adrian4tech@gmail.com
            </p>
          </div>

          <div className={indexStyle.features}>
            <Features />

            <div className={indexStyle.divdif} />
            <Button link={"/portfolio"} text={"See my projects"} />
          </div>
        </div>
        <div>
          <h1 className={indexStyle.haca1}>BLOG</h1>
          <div className={indexStyle.features}>
            <BlogPosts3 />
            <div className={indexStyle.divdif} />
            <Button link={"/blog"} text={"More from blog"} />
            <div className={indexStyle.divdif} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
