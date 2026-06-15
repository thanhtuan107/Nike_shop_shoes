import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import WhatWeOffer from '@/components/home/WhatWeOffer'
import Collection from '@/components/home/Collection'
import TopItems from '@/components/home/TopItems'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <WhatWeOffer />
      <Collection />
      <TopItems />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
