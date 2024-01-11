import { Hero } from '../templates/about/hero'
import { Tags } from '../templates/about/tags'

export default function About() {
  return (
    <>
      <Hero
        title="Muito prazer, as pessoas me conhecem por Chelles."
        description={[
          'Sou um designer com mais de 8 anos de experiência, apaixonado por jogos e tecnologia. Durante esse tempo, tive o privilégio de trabalhar em diversos setores, incluindo financeiro, marketplaces, consultorias, startups, saúde e, é claro, no universo dos games. Essa jornada multifacetada enriqueceu minha abordagem de design, permitindo-me aplicar minha criatividade e expertise de forma versátil e inovadora em diferentes contextos de negócios.',
          'Além de amar o que faço no meu dia a dia como designer, também sou um entusiasta de curtas-metragens e estou em uma jornada de aprendizado no universo da modelagem 3D. Essas paixões complementares me inspiram a explorar novos horizontes criativos, alimentando minha constante busca por expandir habilidades e mergulhar em novas formas de expressão visual.'
        ]}
        picture={{
          imagem: {
            url: '/images/chelles.jpeg'
          },
          description: 'Gabriel Chelles'
        }}
      />
      <Tags
        tags={[
          'Gabriel',
          'Chelles',
          'gabriel',
          'chelles',
          'site',
          'website',
          'projetos',
          'portfolio',
          'UX',
          'UI',
          'design',
          'figma',
          'blog',
          'photoshop',
          'illustrator',
          'after effects',
          'premiere',
          'hotjar',
          'analytics',
          'responsive web design',
          'teste de usabilidade'
        ]}
      />
    </>
  )
}
