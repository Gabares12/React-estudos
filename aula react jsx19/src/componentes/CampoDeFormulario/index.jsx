import './campo-de-formulario.estilos.css'
export function CampoDeFormulario({ children }) {
    return (
        //este ClassName="campo-form" que será chamado no css
      <fieldset className='campo-form'>
        {children}
      </fieldset>
    )
}