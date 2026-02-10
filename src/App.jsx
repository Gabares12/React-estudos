
import './App.css'

// no react, componentes são FUNÇÕES


//props é um OBJETO
//props.ALGUMACOISA,
function TituloFormulario(props) {
  return (
    <h2>{props.children}</h2>


  )
}
function CampoDeFormulario({ children }) {
  return (

    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({ children, htmlFor }) {
  //function Label({props}){
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function CampoDeEntrada({ props }) {
  return
  <input {...props} />
}

function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <TituloFormulario>

        Preencha para criar um evento:

      </TituloFormulario>

      <CampoDeFormulario>
        <Label htmlFor="none">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text"
          id='nome'
          placeholder='summer dev hits'
          name='nomeEvento'
        />

      </CampoDeFormulario>

    </form>
  )
}


function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEventos />
    </main>
  )
}

export default App
