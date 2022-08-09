import Head from 'next/head'
import Image from 'next/image'
import Expertise from '../components/expertise/expertise'
import Navbar from '../components/navbar'
import Sol from '../components/solutions/sol'
import Whatwedo from '../components/WhatWeDo/whatwedo'
import Whyus from '../components/WhyUs/whyus'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <Sol />
      <Whatwedo />
      <Whyus />
      <Expertise />
    </>
  )
}
