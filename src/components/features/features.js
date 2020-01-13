import React from "react"
import featuresStyle from "./features.module.scss"
import BackgroundImage from "gatsby-background-image"
import {  graphql, useStaticQuery} from 'gatsby'

import ImageReact from "../ImageComponents/image-react"
import ImageNode from "../ImageComponents/image-node"
import ImageFirebase from "../ImageComponents/image-firebase"
import ImageWebpack from "../ImageComponents/image-webpack"
import ImageBabel from "../ImageComponents/image-babel"
import ImageGit from "../ImageComponents/image-git"
const Features = () => {
  const data = useStaticQuery(graphql`
  {
    code8: file(relativePath: { eq: "code8.jpg" }) {
      childImageSharp {
        fluid(
          quality: 90
          maxWidth: 300
          maxHeight: 200
          duotone: { highlight: "#DC143C", shadow: "#DC143C", opacity: 30 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  code2: file(relativePath: { eq: "code2.jpg" }) {
      childImageSharp {
        fluid(
          quality: 90
          maxWidth: 600
          maxHeight: 400
          duotone: { highlight: "#32CD32", shadow: "#32CD32", opacity: 30 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    code3: file(relativePath: { eq: "code3.jpg" }) {
      childImageSharp {
        fluid(
          quality: 90
          maxWidth: 300
          maxHeight: 200
          duotone: { highlight: "#0000FF", shadow: "#0000FF", opacity: 30 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    code4: file(relativePath: { eq: "code4.jpg" }) {
      childImageSharp {
        fluid(
          quality: 90
          maxWidth: 300
          maxHeight: 200
          duotone: { highlight: "#BA55D3", shadow: "#BA55D3", opacity: 30 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  code5: file(relativePath: { eq: "code5.jpg" }) {
      childImageSharp {
        fluid(
          quality: 90
          maxWidth: 600
          maxHeight: 400
          duotone: { highlight: "#2F4F4F", shadow: "#2F4F4F", opacity: 30 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    code6: file(relativePath: { eq: "code6.jpg" }) {
      childImageSharp {
        fluid(
          quality: 90
          maxWidth: 300
          maxHeight: 200
          duotone: { highlight: "#FFFF00", shadow: "#FFFF00", opacity: 30 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <div className={featuresStyle.container}> 
       
          <div className={featuresStyle.items}>
          <a href="https://bogdan-v1-node-chat-app.herokuapp.com/">
          <BackgroundImage className={featuresStyle.backImage} fluid={data.code8.childImageSharp.fluid} 
          backgroundcolor={"#777"}> 
           <div className={featuresStyle.item}>
          <div className={featuresStyle.title}>Node JS Chat App</div>
          <ImageNode />
          </div>
          </BackgroundImage>
          </a>
          </div>
          
          
          <div className={featuresStyle.items}>
          <a href="https://bogdan-ecommerce-react-app.herokuapp.com">
          <BackgroundImage className={featuresStyle.backImage} fluid={data.code2.childImageSharp.fluid}
          backgroundcolor={"#777"}>
          <div className={featuresStyle.item}>
          <div className={featuresStyle.title}>React E-Commerce  </div>
          <ImageReact />
          </div> 
          </BackgroundImage>
          </a>
          </div>
          
          
          <div className={featuresStyle.items}>
          <a href="https://apps.bogdan.digital/quiz-game">
          <BackgroundImage className={featuresStyle.backImage} fluid={data.code3.childImageSharp.fluid}
          backgroundcolor={"#777"}>
          <div className={featuresStyle.item}>
          <div className={featuresStyle.title}>Quiz Game VanillaJS</div> 
          <ImageGit />
          </div>
          </BackgroundImage>
          </a>
          </div>
          
          <div className={featuresStyle.items}>
           <a href="https://apps.bogdan.digital/my-weather-app">
          <BackgroundImage className={featuresStyle.backImage} fluid={data.code4.childImageSharp.fluid}
          backgroundcolor={"#777"}>
          <div className={featuresStyle.item}>
          <div className={featuresStyle.title}>Weather VanillaJS</div>
          <ImageWebpack /> 
          </div>
          </BackgroundImage>
           </a>
          </div>
          
          <div className={featuresStyle.items}>
          <a href="https://apps.bogdan.digital/firebase-todo">
          <BackgroundImage className={featuresStyle.backImage} fluid={data.code5.childImageSharp.fluid}
          backgroundcolor={"#777"}>
          <div className={featuresStyle.item}>
          <div className={featuresStyle.title}>Firebase CRUD App </div>
          <ImageFirebase />
          </div>
          </BackgroundImage>
          </a>
          </div>
          
          
          <div className={featuresStyle.items}>
           <a href="http://apps.bogdan.digital/exchange">
          <BackgroundImage className={featuresStyle.backImage} fluid={data.code6.childImageSharp.fluid}
          backgroundcolor={"#777"}>
          <div className={featuresStyle.item}>
          <div className={featuresStyle.title}>Currency Exchenge </div>
          <ImageBabel />
          </div>
          </BackgroundImage>
          </a> 
         </div>
         
    </div>
    )
    }


export default Features
