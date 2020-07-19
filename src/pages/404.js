import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return <Layout>
    <main className='error-page'>
      <div className='error-container'>
        <h1>dead end</h1>
        <Link to='/' className='btn'>
          home
        </Link>
      </div>
    </main>
  </Layout>
}

export default Error
