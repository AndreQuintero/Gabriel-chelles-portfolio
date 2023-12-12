import { About } from '@/app/templates/project/about'
import { Banner } from '@/app/templates/project/banner'
import { Goals } from '@/app/templates/project/goals'
import { Hero } from '@/app/templates/project/hero'
import { Summary } from '@/app/templates/project/summary'

export default function Projects() {
  return (
    <main>
      <Hero />
      <Banner />
      <Summary />
      <Goals />
      <About />
    </main>
  )
}
