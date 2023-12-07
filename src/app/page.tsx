import { Hero } from './templates/home/hero'
import { Projects } from './templates/home/projects'
import { Video } from './templates/home/video'

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <Projects />
    </main>
  )
}
