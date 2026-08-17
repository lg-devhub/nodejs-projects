# Um catálogo de Podcasts utilizando API REST com NodeJS.

## Descrição
Um app estilo Netflix para catalogar temas de podcasts

## Features
- Listar os nomes dos Podcasts por categoria:
    [Saúde, Esportes, Política, Comida, Comédia, LifeStyle]
- Filtrar episódios por nome de podcast

## Arquitetura de Desenvolvimento
### Feature:
    Listar os nomes dos Podcasts por categoria:

### Implementação:
    Vou retornar valores em uma API REST (json) [nome podcast, nome do episódio, imagem de capa, link, categoria] 
    para que consiga alimentar o frontend do sistema.

```js example
[
{
    podcastName: "Flow Podcast",
    episode: "KIM KATAGUIRI - Flow News #059",
    videoID: "8cPH3EHaAX0",
    cover: "https://i.ytimg.com/vi/8cPH3EHaAX0/maxresdefault.jpg",
    link: "https://www.youtube.com/live/8cPH3EHaAX0?si=DD70hb0AX_SAJATK",
    categories: ["Politics", "News"],

},

{
    podcastName: "Flow Podcast",
    episode: "RENAN SANTOS - Flow News #050",
    videoID: "RtVPdwsiqp0",
    cover: "https://i.ytimg.com/vi/RtVPdwsiqp0/maxresdefault.jpg",
    link: "https://www.youtube.com/live/RtVPdwsiqp0?si=9CLKVXiQdxuIdwCo",
    categories: ["Politics", "News"],

},
]
```


## Feito por Luiz Gustavo de Oliveira
#### Projeto proposto pelo professor Felipe Aguiar da Dio.me

