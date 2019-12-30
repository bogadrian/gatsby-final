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
        <h1>Portofolio</h1>

        <div className={portStyle.features}>
          <Features />
        </div>
        <h1>More apps:</h1>
        <div />
        <div>
          <ul className={portStyle.ulList}>
            <li>
              <Link to="http://bogdan.digital/app/exchange">Exchange App</Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/firebase-todo">
                Todo with Firebase
              </Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/simpletodo">
                Simple Todo App
              </Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/addbook">Add Book App</Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/weather">Weather App</Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/github">
                Github user finder
              </Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/my-weather-app">
                My Weather App
              </Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/calories-calculator-app">
                Calories Calculator
              </Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/pig-game">Pig Game</Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/quiz-game">Funny Quiz</Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/budget-app">Budget App</Link>
            </li>
            <li>
              <Link to="https://bogdan.digital/app/food-app">Food App</Link>
            </li>
            <li>
              <Link to="https://bogdan-ecommerce-react-app.herokuapp.com/shop">
                E-commerce React App
              </Link>
            </li>
            <li>
              <Link to="https://bogdan-v1-node-chat-app.herokuapp.com/">
                Socket.io messager app
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
