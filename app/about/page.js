import LogoMarquee from '@/components/about/LogoMarquee'
import AboutHeader from '@/components/about/AboutHeader'
import BrandMission from '@/components/about/BrandMission'
import Represent from '@/components/about/Represent'
import AboutStory from '@/components/about/AboutStory'
import ValuesStrip from '@/components/about/ValuesStrip'
import AboutCTA from '@/components/about/AboutCTA'
import AboutFooter from '@/components/about/AboutFooter'
import FloatingSocial from '@/components/about/FloatingSocial'

export const metadata = {
  title: 'About — EKiN | Premium Shoe Shop',
  description:
    'Câu chuyện thương hiệu EKiN — theo đuổi sự vượt trội bằng sức mạnh & sự tinh tế. Giày chính hãng, kiểm định thật, vì cộng đồng đam mê vận động.',
}

export default function AboutPage() {
  return (
    <main
      className="text-white bg-[#0a0a0a] min-h-screen"
      style={{ overflowX: 'hidden', WebkitFontSmoothing: 'antialiased' }}
    >
      <LogoMarquee />
      <AboutHeader />
      <BrandMission />
      <Represent />
      <AboutStory />
      <ValuesStrip />
      <AboutCTA />
      <AboutFooter />
      <FloatingSocial />
    </main>
  )
}
