import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exerciese from './Exercises'

export default class extends Component{
  render(){
    return <Fragment>
    <Header />
    <Exerciese />
    <Footer />
    </Fragment>
  }
}