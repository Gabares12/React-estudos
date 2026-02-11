export function FormularioDeEventos() {
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