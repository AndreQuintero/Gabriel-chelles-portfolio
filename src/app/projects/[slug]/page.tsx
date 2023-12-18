import { Articles, ArticlesProps } from '@/app/templates/project/articles'
import { Banner } from '@/app/templates/project/banner'
import { Goals } from '@/app/templates/project/goals'
import { Hero } from '@/app/templates/project/hero'
import { NextPageSession as NextPage } from '@/app/templates/project/next-page'
import { Summary } from '@/app/templates/project/summary'

const articles: ArticlesProps = {
  sectionArticles: [
    {
      sectionType: 'single',
      articles: [
        {
          title: 'O impacto da pandemia no Brasil',
          items: [
            'Serviços como lojas, bares e restaurantes são responsáveis por 70% do PIB Brasileiro.',
            'O setor de não-duráveis, como alimentos e itens de higiene, contribuíram para amenizar o resultado negativo da pandemia.',
            'Desde o início da pandemia, houve um aumento de 48.3% no consumo geral de produtos.',
            'A migração do consumo brasileiro para o ambiente online estava prevista para ocorrer em décadas, mas aconteceu em semanas.'
          ]
        },
        {
          title: 'Alguns aprendizados sobre o público do Iguatemi',
          items: [
            'O principal perfil identificado são mulheres, de 25 a 44 anos, classes C até A, morando com companheiro.',
            'Pessoas de classes mais altas demandam uma melhor qualidade em serviço e na marca. Pessoas de classes mais baixas demandam mais descontos, avaliações de compra e facilidade de pagamento.',
            '59% realizam compras online com grande frequência.',
            'Os produtos que não precisam ser vistos/tocados são os mais comprados online (alimentação, eletroeletrônicos e acessórios).',
            'Produtos como roupas, calçados e perfumaria são os mais populares para se comprar fisicamente (para poder provar).',
            'Ganhar tempo e não pagar estacionamento foram os principais motivos citados para se comprar em um shopping online.'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/d6fe/80c5/5f90a522cfdc14093e8b8b780d2cfbd9?Expires=1703462400&Signature=UCon8egbmQhbE9NBGPfRrqye07XH9UXi1UkWYoMy2wtzBgLibuC0WIQFZPFs5YgLer4LZyIKQgGl5ASScBLAlJwXBE6Tp7pcLfvzQ~rQagR~3MEnYIhYxTVLRUJ0YYEzKB5~JDmzynl6JFuVCRzp7SCzisR2nMaRR8M0niuaP5EPYxwyEEqKyjkzSg8BxOqtNP8vY~EttFPUDuviSEnl9DapFjnkgqdCXwDuJmw0Hm0xU1PHtvaD5NZkfYpOw3G2iVaxwzk-rPO-DDa0d5HZQURz6JCOOQIlOIN9OeHs6ds~9OxvrUnTEyC374Ad7oOd3vt9Vw~yA8~IrVGpdaDWpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'projeto imagem'
            }
          ]
        },
        {
          title: 'Como outros shoppings estavam lidando com a pandemia?',
          introduction: [
            'Nosso time trabalhou analisando concorrentes diretos (outros shoppings) e indiretos (e-commerces no geral) para entender o que estava funcionando naquele momento.',
            'No geral, vimos grandes oportunidades em incentivar o usuário do Iguatemi comprar online, mas fazer a retirada de seu pedido no shopping, como por exemplo.'
          ],
          items: [
            'Descontos parciais ou integrais no estacionamento para retirada de suas compras.',
            'Descontos em próximas compras em determinada loja.',
            'Descontos exclusivos através de QR Codes nas lojas.',
            'Compra de peças de roupas com um personal shopper.',
            'Facilitar as retiradas dos produtos para quem não quer entrar no shopping (através de locker, drive-thru, concierge).',
            'E muito mais ...'
          ],
          conclusion: [
            'Mas para os usuários que quiserem receber seu produto em casa, tudo bem também, o Iguatemi tem a oportunidade de se tornar um centro de distribuição, agilizando as entregas em até 2h após a confirmação da compra, onde as maiores dores de quem precisa receber algum produto no nordeste é o tempo de entrega e seu frete (onde ambos são exageradamente elevados).'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/2952/2b40/e086de1586a81095dd1ec677d4902559?Expires=1703462400&Signature=m1aGvp1NP8HPqYDDKsBq~E8UHMNHRkXOByWMgQJVOVhcBLrrDJ208L5doT2uQa8Xzj2TxEHLjK4AlXbVQ6qQ8QX6eX7F4J2PUQunO8BMeHFJzOf-IRGQMm1QPxvvzRYjZext6cjw5T0V0Y9LKNmhiz-Kv11OKLcwt-aY130rQVUng0CLe49PuSAkPJ2TaBbn890BNDdbZSfFwzMmFOnRCBnwtLkwthDzbckxFtlbK5E8-mpePYOlaJSe2ZZ2Gn1PnHQi8dAdBrkQF96Chxz~GvksJMh2R0AZuzagoBrylaHAqmr8k6ARo2SoIrZG6vOa-ZZqIzJD1f~4tDikhocOuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'pj1',
              fullWidth: true
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/441d/e068/5c21fb4314b7d295b2c8ac6716a7cecd?Expires=1703462400&Signature=oRaF5xog10qVttYDXz2~vyurOICvhWquPep03tfhZ5GvarGCjDGRXqfXAwKaeB7lvhdDVgwxKjaaInmgeTfaYrsu~cW8iKPFwDwXwMNdPK62hoawGde2T7PT8cN9I1-H3QpxRkHUKqjgOYwBZw75MKganKp4TOasqu1TagmC4A7gQg1lsO5IdIBLzMVQPuoEWy4apYUxeCb3n5R8TNineAHObxzkKG2oTJBFXfwwFOpzLqAKrCjzsk8ayJeYhv0Npc~QT4q690UGmUg1k3EfsBrkM9w5GN97ARm3O4RBK0IuLqgIRbcmN7m946U2B7n7r6zszP1RJ49-RJiNr5sAuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'pj2',
              fullWidth: true
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/0bac/248f/16cec91eb9e3d1c0c0298d92f80b4bf4?Expires=1703462400&Signature=VV9qDulIDWKnThkDICoL83ybkvS61DVnKR8v6-PrCczJ0R18oEXk0t5jX7hAPYrC4ngUSLlsVYmn2oyos1pnjRCE6Q5Nm7nqThsr5pWk-gWsobAXPjBpT9TsD8T6Ckwd9DCOWHME-FFireQvaFCkDqHhnoL2nU-rF5dVVOu85R8aJa09RWeLMuq8U-mvqv7-P6AdIaZeCY4a7NG2U1YltX3L-~KUpms1cl-VzqOscqq81~0Ko1h-UDcGkJgZKS8CnOTpocPPm6wsSKz1V3GbITU9xZLT~fVesaUyKMZUTLxkOi2~yG9O~Is9uQ1QBbVQ8Z804YtUi5FYCmjU0r6dwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'pj3',
              fullWidth: true
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/3569/c378/bc5afca58aaf7b8c0a31709324be27ba?Expires=1703462400&Signature=COMb6EjPHHj9G1m-YHqlliDjZAj6T1liMlHwNUTtVdZu10oH42Uxk~qvYCB0IWqHMrWooKkhoYl~hooDHJA-6a8AT739q4iAttvn3Ogjn5NNArZ5F1xzyjKkAIJnLmMCKk1swBWP9A-XhNe9YuzyJzcdUBC0btmoaBWDq~mDE8Diwyyx16dCAFpw~lAU8KbTLsQgPomuGtb78QuDbgWRDH9lfT8fhnnlRHx6AXkJSszEYuE6eYEPhHpiDKdinRzfxr9MZPmWzNRV4kW8382yqTdo6YmpK4kTw9fKAlQL~8nnVbv0Hyn82fXBs06ODFZrx5iyaxh3Jdr394aQgTbZuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'pj4'
            }
          ]
        },
        {
          title:
            'Como poderíamos trazer um produto relevante para o Iguatemi , seus lojistas e clientes, respeitando um momento de pandemia e mantendo sua referência em inovação na região?',
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/32ee/d111/07832de06ed98ce7c1b8ada524769fa1?Expires=1703462400&Signature=nBLs8qBnsNR0lLnnyejdfG3zFE7ZP3GCDkEe6n~0wHh1S1w9HpM--Qy0nOjLGLdHt46ixiPOKooigTb5~y42D4bM2lxrJFhCKkt8HXVO38ECi5ORpb-BN5eL5dPiFO7ITQwgOM5eeLGNk1VZ8QZ8cC88~ToUarXDnYPbGJr7xlqsJk3QIGo4K~AKQpk7BQNnPZ25laawG8MEa---dj1CeHPj24vmVqMcjK~ywVssqTKVa-sCnEVz-h-9sCs3XGXoM9u1Yd01OuJMEa-vilTAhcuNu4PfoHQz89aYaR6nsG2KPDzEhIbeBkfNiDPHWU5xVp9N3xjRtmngrxe6dPq59g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'pj5'
            }
          ]
        }
      ]
    },
    {
      sectionType: 'multi',
      articles: [
        {
          title: '1. Entender os clientes',
          introduction: [
            'Entender os padrões e comportamentos de seus clientes, para sempre fazer boas indicações e trabalhar com mais assertividade (foco em CRM assim como a Amazon e outros grandes marketplaces fazem).'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/5dd5/75ef/c4af63f5c8ccfc262985c1e3263733a2?Expires=1703462400&Signature=QZdxCr4GRu3uo9TuCEGuB~FJSYJkEsY8viHPZGQ8LRDnaEmebVPR5Cktqax-5etQtW0-CHz48ryc8OCsixI6cbMDsfSXPp7H~tPETbl2rSiTmL~rHxkl8RtKp4~8Me9ut1au1IDYZsZ-E5g9BsgxMV79gVUQuwolushDLhus~StOBdRbxd0SyhLhg5sxscEeFLHGMAIYOqWyhm~1QjH2IgnRK4QJi9~ll6~jbhZt9TdVUHbNhqQtsN96cHFQYMnvSppbRru184uYoX5jSOb9ePKgtAJj9OvS5RptbBeSDR6JaBMZk99PHS~f2746PBzXyac4-L-xPe3EzCnkZJdrzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'step 1'
            }
          ]
        },
        {
          title: '2. Trazer o melhor',
          introduction: [
            'Entender o que seus concorrentes estão fazendo no momento, identificando oportunidades de negócio e sempre ter uma curadoria de ponta para exibir o melhor dos lojistas, garantindo produtos e atendimento de qualidade.'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/37a8/93c2/6746e58b263c925194b0fdd55b3b9cc8?Expires=1703462400&Signature=AyFOAXiBY1s-H2PaQNpuDDx6Y5cVQ1-33kIXbRQGbo9Xa5Dpue~yHUXzTPWVDN7Aoafi-NsS4DAFq5YVLJ4RDMcMliF8GFXpTABue5RwkT0hpfSY5wGS2ZP51ha1gY87~LpIhS8-p5sKMxYGzEJzmAuEiZSqB0eIFfkUIZfpRsr1gw0ezS13ZmefGlJXuFPhVRWv3WL35a17ONTqThDXIGpwNAafyZK-3jFidCvaVmvYI1zq5UZoo0LWOASxDmeZH5uuMOoT~56rtlBNInSG3VGWNN3MvfC6jME1j2JHexHtZ4uCD~AuezTzEbHh9VVbZhgrtaNB~s0CIu6op6y1TQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'step 2'
            }
          ]
        },
        {
          title: '3. Ser democrático sem perder a sofisticação',
          introduction: [
            'O Iguatemi de Fortaleza diferente do Iguatemi de São Paulo, conta com todos os tipos de classe e públicos, sendo uma opção para todos no Ceará. Sabendo disso é necessário trabalhar com um visual inclusivo, moderno e mantendo a essência do Iguatemi.'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/fb4a/f741/5d2f1401cac37afca65198e2e105e391?Expires=1703462400&Signature=XkM6NrygkOHicR1Ddv3EGEIKLtms63nfxtE5smR3~t2TO3ZySZ8Kppt~fNUyvWkrUPEwiVjGMwt5EAq5ZylvD5jI5WKHCbCEHV1XioEIsh8r9ahWdx-e-97y2YtVU0EN6Le1EGTpKB2ZONya3AIoOkwgunfEXrWNcoPDCdCPOYU24HKcpKBsl~G23gzh4~W3tMubGyCqMCfQo6Nsdd9g4i99ixdIU0LO8cPn4d54WjTsx-n6M1Jt463KmIzfsmGuzyRjIOEo3C4NBJ2TVU7733v1J9daChshLCAemIXA~KSTVUtYLH-oXyUiKWpJe5BuFqCHINtgfj9MVCvAwAjDAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'step 3'
            }
          ]
        },
        {
          title: '4. Ser “Fígital”',
          introduction: [
            'Trazer a experiência do físico para o digital sem criar uma competição entre um e outro, mas sim incentivar o público a ir para o shopping incrementando a atual experiência.'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/e7c3/c4a0/a600187f228dec95a624c627244fdfd5?Expires=1703462400&Signature=NVUr1COyOh5Sa7~r3UYvm1HIoWlgcRh5fUyn6TssLTT0GEbxKz6wrLDyMEZtleDRBx8Z8ve3GJOe-X~eIV~6O6Va3Flr4cKzsbRe7kkgaU6CTGX1wuLgDdMzDbpK8yW1XEAbnmyIFhy2PR6FP9ICdPxWe408XjdeX1dDssps9JTZkrKVdwQC2xL3plHOXi6hgiGgpaVZwYt4wdOlkTLEHRN4VoguKCrBPGIgcSIXlnxLIgzSD3CMCyuyTLo0uTB8vIeORHCBlATPVcIX0a~sMdJqhCcwLMQm7psbq8r4xTMKBGFgizSbONqdBh3Wp3a56Gc8784CjgkRwVzv25TPqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'step 4'
            }
          ]
        },
        {
          title: '5. Ir além da vitrine',
          introduction: [
            'Transmitir conteúdos para os usuários, criando uma identidade que agregue valor além das vendas.'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/74a1/515f/14b9a2f7320f36f21fcd9c15fc1277ff?Expires=1703462400&Signature=XD8i-TlV4wbzI46EzrStLtumiC9QX1DxqnZWtXDuWtfxhMrFXF86XkxNYjGainVm5TOV-eHBbbq~eP3jc4rBOy6k7OOPJYnVvoJqi3ENDqy8MQZtGslVfDN1NtG~8xvGmJuGjY36iZuWLyJfWTfMtSi6eyJDTcZuuS4tWVJRrDZ32J1QSAoQrFaxXt69epzbcfOQ-yYUQkX2TaGTXgEKuJRWSGNUtyFJZtx4ras5OfRg1ErvFqx1VPTInEzNsnr1RL4OKSEaw25vlToKhEW3Z62D5zj~-fxy09iyyUqfOqk7Px-e7s-C745rsj1Blxmci9mqi7mGewsMzmUmLDTMKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'step 5'
            }
          ]
        },
        {
          title: '6. Apresentar um serviço diferenciado',
          introduction: [
            'trazer um serviço de entrega rápido, barato e eficiente para a região.'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/4aeb/0cf0/22356df901cf2660511e808cad2a3025?Expires=1703462400&Signature=caev39g1KS~VPBIomnOzZPfBRGyl4wiLjNMr6ZrmRTkBEeeZ-i6Y5DMvhnaj2bump2VqCdnht49YLvmzg6GOn6yf~bnNMLx8hi7X3NOOMkSFLMrFhwf2j2xye4nPW5vT9f6BUlOx9ic-jiurwt0cG-tfcbP1zVg6CHKqUh5rwpnPQRmQDOdwyXjQYKY3dSTQfdaJYXBxTSpcDPevCrVd4r27T~VqP0m3dkAU1Zc8wsxzk1B~ghvn~NNenxhi-KsAS0vOGqIlOshp1bRMMjozKWo9lssxyCvFX5ohcXL1Yh-xyD9xJc7H-3hw8hkmWQzYbZAgXtoCrMOGM~TYORkY0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'step 6'
            }
          ]
        }
      ]
    },
    {
      sectionType: 'single',
      articles: [
        {
          title: 'Levantando novas ideias e gerando um backlog',
          introduction: [
            'Costumamos fazer um workshop de geração de ideias e priorização com todos os stakeholders, com isso, ajudando-os a ter novas ideias para o futuro, todos ficarem na mesma página, e aumentar a colaboração entre o time.'
          ]
        }
      ]
    },
    {
      sectionType: 'multi',
      articles: [
        {
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/3a7f/9f02/3111a49d3896b865c98466573ca0ea89?Expires=1703462400&Signature=cdbbVXPQdaiWCkOm0S8wRVEjiJQK2z0myUzbQrvTDAAQjnkBhvlitLELpfoQtc9hbzVfCi-oLOvSjy1eTKbhaTsmJn5qz4N5ZReEd6VP4G96OEXkJkKHMb~JTmh8cxqv7GxWZs7xlYjojrGQUWa9APmcEzxB5UDHkhF8mQVJ6-ameDjZuDC8tkmLSwNKUqJC4j-S4hqldrB2UKoIv8fYvS~-Xgkr6F-FXiioi5eMN8b2GciC-mFBIoo2JXLRhvAGi1gQJKv08-5NoQCojkIa3JylMpH3KfYCTVsLa~qM1tSKXjft~BQIb9FcH~zwN~Q7f8TTMbdxsOXAamQfJ4O~aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'project image 1'
            }
          ]
        },
        {
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/89a1/da6d/fa804e143bdc5ded7f79f1470394575c?Expires=1703462400&Signature=GoA89axlwyMnn9qWIQJE-zy~UQDYtJVQgLVdAYsuVzcaCGu-ffbJ7YOcqZoVfbfX4DWetgYbm-vGNtazFA-tMHgJF4vxKGPhOklJCZLSlxTsEpGyk2R9EEPjrEMaNwYTerxTeeJ60MGXZ5PKcUZqHRMztS30Nj8tcS0c8MItmqsQpCNPq~a55eUIrh5itCJPDseRyuxG6cDCrXPlXox4HLjXYBmb1v~MjhpXy0uzkAYY~8XPlYP81JeFD4YEuGCmJ-jo0Dn1rPsWUZtP4b5SVOdCXarFp3cqJfKrEoDNg-ASW71Tw2f7F4avTRRbomaK6M654VGZoTN9A-hAR1k6CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'project image 2'
            }
          ]
        }
      ]
    },
    {
      sectionType: 'single',
      articles: [
        {
          title: 'Construindo, Validando e Melhorando',
          introduction: [
            'Na última etapa do projeto, prototipamos todas as telas do site, suas variações e componentes em wireframes, e após a validação do cliente e refino de UI, conduzimos testes de usabilidade e funcionalidade com clientes do shopping.'
          ],
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/3a7f/9f02/3111a49d3896b865c98466573ca0ea89?Expires=1703462400&Signature=cdbbVXPQdaiWCkOm0S8wRVEjiJQK2z0myUzbQrvTDAAQjnkBhvlitLELpfoQtc9hbzVfCi-oLOvSjy1eTKbhaTsmJn5qz4N5ZReEd6VP4G96OEXkJkKHMb~JTmh8cxqv7GxWZs7xlYjojrGQUWa9APmcEzxB5UDHkhF8mQVJ6-ameDjZuDC8tkmLSwNKUqJC4j-S4hqldrB2UKoIv8fYvS~-Xgkr6F-FXiioi5eMN8b2GciC-mFBIoo2JXLRhvAGi1gQJKv08-5NoQCojkIa3JylMpH3KfYCTVsLa~qM1tSKXjft~BQIb9FcH~zwN~Q7f8TTMbdxsOXAamQfJ4O~aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'dasdsad',
              fullWidth: true
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/edd0/e1f9/284018f12a9d6cd7300727c1f8cad75f?Expires=1703462400&Signature=q5EatPAG5iPcHhEWokIwuXx0~CmUQYx2Sfudm79tooBjOSyN2jje9RK8hwfSu8nICF6IjWxXFRBw0ycK-GBbT1ZK5z6YJdbbT4Or36NUOg1E3HZgGvbBjmN37deucZ9fke5xaoCtXAVwrghf02Oa7pht0BWmS9bX5jteKMHeoR1sVeQI3AYvXf9ai30nnxIKqxO~qvpBqEbQwmllmFbAipgcqxl5w6bVsqfQLkgDWfKXeJd-YbHElw9d43y4HGZc432G~FFMSWD7NoqYYH1wPcQgZToDk7J0nF4GrxpbViHBxjMiNDqfNaN-z8Nwr5FdqPVtoiWtzi8DmVzJXDWnYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'chelles',
              fullWidth: true
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/a227/829c/b27fc5fa88ad3f50ae701890fbef9208?Expires=1703462400&Signature=mEjaI3F497ekeLvLiPO-HS0mYpQUMbxHEP93U43AEdoEj3SO8C3B3-gv1tLpt4EXIXVdasc5FKUWZstIb0CsHTJ~mWCqqdbf2rTmCTuvZHbnROYjNLwRhKgK9464RgtZ777RutdpWR6QWcXFcQfBx8MwWQdB-bRpcBgre-gaajuGpUeN1~1DT7RUmcEdVSUeM-7ubsomAxhg7oUEYZhGHDHn~ws5upgjYavRhrxPVk6rp107TpV6O3MXKW-kr226BUvg6aozEPLipiEvKk-6MzSc4HIWFcJQWXF0YrOipbpzR3Uu~QfynRVnrAcB-vCGzbsAtQrTfzNbgc-E7wMESA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'graphic',
              fullWidth: true
            }
          ]
        },
        {
          introduction: [
            'Com esse novo projeto, o Iguatemi agora conseguirá entregar uma experiência de compras online fora da curva, apresentando para o mercado o conceito de "fígital", onde os lojistas conseguem ter mais uma frente para expor seus produtos e gerar receita, em quanto os clientes da região são apresentados a uma nova forma de ir ao shopping, tanto digitalmente quanto fisicamente.',
            'Pioneirismo é uma característica dessa marca, que continua inovando o mercado na região entregando um novo ecossistema tecnológico que acompanha as tendências do resto do mundo.'
          ]
        }
      ]
    },
    {
      sectionType: 'single',
      articles: [
        {
          images: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/7ee9/9d46/82973f0964a5869b4a66d7a7f7e27dfd?Expires=1703462400&Signature=ISeujuu5vjXqL4UMkJLz8V42fpzr4PecirHOXvhj0ow8vG9hP6XNxrqUnm27F2mYFJI18Ywb0Bo-U7jaGH96QoBBXTEyAH9KaxM7P1g4cv-lUrJmB5~Y1fPLzxuhFsxAv1UZqx~TCqyIERPJWB3u73U9RkqKrZkeJ3XKUHVorGmcObpH7jYuGCLV8sL711yYZjIkEzAO1pAl-ydseRpEdtLTPPDHu6vRQvoxHW9bLEzfMRz6xBZR5gtf4z1UcO97ocwiwPSNe9naeOPDUrjL266LZ5QM1vAqyEtSP8A843Pk14y5tDSEPyhhsURxgcT6MJjf0T8GJnW8mSIc2U8MGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'case 1',
              fullWidth: true
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/f2de/d99c/89fdfd04d6fbbf0937148f43063df4b1?Expires=1703462400&Signature=nciq-~gozigHjj3nZFkUWGGCClK6McnmlT49uMscGlJSRmB0xIfYwN1zXDIf0T4jFLP2v881MScG5hDe6cPhYuRJaJKsukSUbT~11OMfWDjykLIvYslJINJxMMj5DmHm4JZsdA23EH3IbZhOL-1Dg5cm7E0xkcAQdA2V7lhyPhTvcfsN88ta5gJLFtoov8cfUqW~UCf0SV8eACvdAl6qevMbU-gv0EWZW1i~o~Z~~3qPCsiddtCgfBuvg5OBzDYyaknGhtof6lrlQ-iDZB7txHGDuvnZLJ~BpU7IsGo-DrU5fNU~UdCXRqNVmin7Lw3Mw9erukAnS1cZQGrS-uYGPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'case 2',
              fullWidth: true
            }
          ],
          showcases: [
            {
              url: 'https://s3-alpha-sig.figma.com/img/8354/198a/4b90b297bfcf64c90312c8566f01fc21?Expires=1703462400&Signature=Pft4UlluwxKv-NENtDYQRkHyq-f4pWXcHPOon715VXsCRcAlYC0UsASR3Zb4pYXqH318p5li4eQDnElgMznLWJ7lWNM0wlbVT8Wf0FhYkwUfSELBTBwkhzm-ykIT5Oo83l3JJMnGvTdg~xKhK7n3-PVRo2VroxGFWzKpFwwN~Y6WxYq-~M9GturIoyUH0sHyM1FM-RntDTWw-8nuLlguMTVjTtTFw8SMn2IXE2ZsFCuuE1MPVfUzYfFODvPlOoFbGY7F86uW3~xLy3NDKnsSYG58pz6bVQPQCund1glNkAR293uxtR2xm03cRyC6RpRFeE3B35M4yI3NluzQaFEJjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'show case 1'
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/af19/170d/ae54a6f47fb46f2944ccf1c58c0eb9ad?Expires=1703462400&Signature=BohX9DlKI8gYEL~3p9h00Z9lqzS9fTg1RYtLfScMszeZmoakrdpXwSfQeC14omYF7KvIh60IDc4i6mlThnElTkew-GOzJepzIqteULz2s~6D-TIsRkH5LXN9MBLTJGnxa-WvbZ8uDn5gbBjM4cRPuCBuItzL7mWTeINKHRC2Lk8rG0RVwOFG1VUR~lgfPU1lp0E7XFTmwod5r4Vka21uHH7MSBxazFRJnaqNxCFfsVNvmbai6wkWsfVDO-LLJbXxPNdZcVu~cSRo69FpUDevgiKwZOsyVUT0zyH4EPgLte~uV~L9hCb4izygyGhoSZAJQl~HcwQ4no5LA3-SjZ3RlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'show case 2'
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/f17f/b8b1/ba100a28fff43f7e940556640bc32d17?Expires=1703462400&Signature=VuuQCKU5qTa4zA6u7NzRtgtRTto~u1q-FVE6IpdvtwqwDHXS6EX2PASB9vyMgR3GfTN~r63eIc4EXIKCO9sHZyWDdR4G1962~7Qyr6eFxJxGPqKZQzp71sfscYt4stwUYyAOend8Gvz~GacEt-6CCsZ0spvbfYXLpB4h6jZp-~GoDaINEkv7noQN-SxORmVN4fZ8C-8Qwg7PNNM4~VfRMpAJsUGzinIJbBSrc8HL1TDF3AtU2KnflUiFxU6HxwCufqhk13LsXtNf19BAIuZm2YHkr5H6RyrSzDKkzXD9gQ2yzYabB4rWwhfOgNH~keqQUYOd~Wjaq95TiJznipP~1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'show case 3'
            },
            {
              url: 'https://s3-alpha-sig.figma.com/img/70a1/d647/6c8f7b0494fe0932387aa50f26dd3a64?Expires=1703462400&Signature=l6VbFBO3LmB-6cmG0zIJCs0qn2Ep3G8yPzuovhzl3GPpupOpuiPrhtI-gC06N~JEgabiKC36aASo7ej6P2mrBOwESMXJ6eN13CSS2BiHP5HFwgFzcvtUrykXdu0re5kPlkqb5gmD3GB~tsdq7L-r7FnrwCGI9dKCFHffc0l9AXek7wKCAtLZ5B4uTjaoc31jpzjdkBUem4VYfs3fnL087KBJNH~lPjobFmqemk~hA0mPPZ1N4Paz8k28yTDOZo8pCUO1rFMpLY2SYVO~G2rLT6QqKP3fcBNKhUpc1w1hnuuZxohNhadTB875mJM1saqs7X8hh7sC1cApm3xodfgkOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              description: 'show case 4'
            }
          ]
        }
      ]
    }
  ]
}

export default function Projects() {
  return (
    <main>
      <Hero />
      <Banner />
      <Summary />
      <Goals />
      <Articles sectionArticles={articles.sectionArticles} />
      <NextPage color="#FFC099" />
    </main>
  )
}
