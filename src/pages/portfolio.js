import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Features from "../components/features/features"
import portStyle from "./styles/portfolio.module.scss"

const Portfolio = () => {
  return (
    <Layout>
      <div className={portStyle.container}>
        <SEO title="Portfolio" />
        <Link to="/">Back Home</Link>
        <h1>Portfolio</h1>

        <div className={portStyle.features}>
          <Features />
        </div>
        <h1>More apps:</h1>
        <div />
        <div>
          <ul className={portStyle.ulList}>
            <li>
              <a href="http://apps.bogdan.digital/exchange">Exchange App</a>
            </li>

            <li>
              <a href="https://apps.bogdan.digital/firebase-todo">
                Todo with Firebase
              </a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/simpletodo">
                Simple Todo App
              </a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/addbook">Add Book App</a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/weather">Weather App</a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/github">
                Github user finder
              </a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/my-weather-app">
                My Weather App
              </a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/calories-calculator-app">
                Calories Calculator
              </a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/pig-game">Pig Game</a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/quiz-game">Funny Quiz</a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/budget-app">Budget App</a>
            </li>
            <li>
              <a href="https://apps.bogdan.digital/food-app">Food App</a>
            </li>
            <li>
              <a href="https://bogdan-ecommerce-react-app.herokuapp.com/shop">
                E-commerce React App
              </a>
            </li>
            <li>
              <a href="https://bogdan-v1-node-chat-app.herokuapp.com/">
                Socket.io messager app
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
