import React from 'react'
import './App.css'
import CategoryList from './components/category-list'
import CompanyList from './components/company-list'
import Container from './components/container'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Wrapper from './components/wrapper'

function App() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <CategoryList />
        <Container>
          <CompanyList />
        </Container>
      </Wrapper>
    </>
  )
}

export default App
