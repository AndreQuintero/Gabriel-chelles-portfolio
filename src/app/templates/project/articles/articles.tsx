'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { Article } from '@/app/components/article'

export const Articles = () => {
  return (
    <S.Wrapper>
      <Article
        title="O impacto da pandemia no Brasil"
        items={[
          'Serviços como lojas, bares e restaurantes são responsáveis por 70% do PIB Brasileiro.',
          'O setor de não-duráveis, como alimentos e itens de higiene, contribuíram para amenizar o resultado negativo da pandemia.',
          'Desde o início da pandemia, houve um aumento de 48.3% no consumo geral de produtos.',
          'A migração do consumo brasileiro para o ambiente online estava prevista para ocorrer em décadas, mas aconteceu em semanas.'
        ]}
      />
      <Article
        title="Alguns aprendizados sobre o público do Iguatemi"
        items={[
          'O principal perfil identificado são mulheres, de 25 a 44 anos, classes C até A, morando com companheiro.',
          'Pessoas de classes mais altas demandam uma melhor qualidade em serviço e na marca. Pessoas de classes mais baixas demandam mais descontos, avaliações de compra e facilidade de pagamento.',
          '59% realizam compras online com grande frequência.',
          'Os produtos que não precisam ser vistos/tocados são os mais comprados online (alimentação, eletroeletrônicos e acessórios).',
          'Produtos como roupas, calçados e perfumaria são os mais populares para se comprar fisicamente (para poder provar).',
          'Ganhar tempo e não pagar estacionamento foram os principais motivos citados para se comprar em um shopping online.'
        ]}
        images={[
          {
            url: 'https://s3-alpha-sig.figma.com/img/d6fe/80c5/5f90a522cfdc14093e8b8b780d2cfbd9?Expires=1703462400&Signature=UCon8egbmQhbE9NBGPfRrqye07XH9UXi1UkWYoMy2wtzBgLibuC0WIQFZPFs5YgLer4LZyIKQgGl5ASScBLAlJwXBE6Tp7pcLfvzQ~rQagR~3MEnYIhYxTVLRUJ0YYEzKB5~JDmzynl6JFuVCRzp7SCzisR2nMaRR8M0niuaP5EPYxwyEEqKyjkzSg8BxOqtNP8vY~EttFPUDuviSEnl9DapFjnkgqdCXwDuJmw0Hm0xU1PHtvaD5NZkfYpOw3G2iVaxwzk-rPO-DDa0d5HZQURz6JCOOQIlOIN9OeHs6ds~9OxvrUnTEyC374Ad7oOd3vt9Vw~yA8~IrVGpdaDWpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            description: 'projeto imagem'
          }
        ]}
      />
      <Article
        title="Como outros shoppings estavam lidando com a pandemia?"
        introduction={[
          'Nosso time trabalhou analisando concorrentes diretos (outros shoppings) e indiretos (e-commerces no geral) para entender o que estava funcionando naquele momento.',
          'No geral, vimos grandes oportunidades em incentivar o usuário do Iguatemi comprar online, mas fazer a retirada de seu pedido no shopping, como por exemplo.'
        ]}
        items={[
          'Descontos parciais ou integrais no estacionamento para retirada de suas compras.',
          'Descontos em próximas compras em determinada loja.',
          'Descontos exclusivos através de QR Codes nas lojas.',
          'Compra de peças de roupas com um personal shopper.',
          'Facilitar as retiradas dos produtos para quem não quer entrar no shopping (através de locker, drive-thru, concierge).',
          'E muito mais ...'
        ]}
        conclusion={[
          'Mas para os usuários que quiserem receber seu produto em casa, tudo bem também, o Iguatemi tem a oportunidade de se tornar um centro de distribuição, agilizando as entregas em até 2h após a confirmação da compra, onde as maiores dores de quem precisa receber algum produto no nordeste é o tempo de entrega e seu frete (onde ambos são exageradamente elevados).'
        ]}
        images={[
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
        ]}
      />
    </S.Wrapper>
  )
}
