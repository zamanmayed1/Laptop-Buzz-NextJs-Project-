import Image from 'next/image'
import Widget from '../Layout/Widget'
import styles from '../styles/Home.module.css'

import HeaderSection from '../Components/HeaderSection'
import LatestBlog from '../Components/LatestBlog'
import MostPopular from '../Components/MostPopular'
import HomeCategory from '../Components/HomeCategory'

export default function Home() {
  return (
    <div>
      <Widget>
        <HeaderSection />
        <LatestBlog />
        <MostPopular/>
        <HomeCategory/>
      </Widget>
    </div>
  )
}
