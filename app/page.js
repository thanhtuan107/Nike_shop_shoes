import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import WhatWeOffer from '@/components/sections/WhatWeOffer'
import Collection from '@/components/sections/Collection'
import TopItems from '@/components/sections/TopItems'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'

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
