
import { useState } from 'react';
import './App.css'
import { Banner } from './componentes/Banner';
import { CardEvento } from './componentes/Card-evento';
import { FormularioDeEventos } from './componentes/FormularioDeEventos'
import { Tema } from './componentes/Tema'

// no react, componentes são FUNÇÕES


//props é um OBJETO
//props.ALGUMACOISA,


function App() {

  const temas = [
    {
      id: 1,
      nome: 'fronto-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artifícial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ];

  // const eventos = 

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'mulheres no front'

    }
  ])

  function adicionarEvento(evento) {

    //eventos.push(evento)
    //console.log('eventos =>' , eventos);
    setEventos([...eventos, evento])

  }

  // rederização condicional usando &&
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEventos
        temas={temas}
        aoSubmeter={adicionarEvento} 
        />
      {temas.map(function (tema) {
        if (eventos.some(function (evento) {
           return evento.tema.id ==tema.id
        })) {
          return null
        }
        return (
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
            {eventos.filter(function (evento) {
                return evento.tema.id ==tema.id
           })
           .map(function (evento, indice) {

              return <CardEvento evento={evento} key={indice} />
            })}
            </div>


          </section>
        )
      })}


      {/* { <section>
        <Tema tema={temas[0]} />
      </section>
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> } */}
    </main>
  )
}

export default App
