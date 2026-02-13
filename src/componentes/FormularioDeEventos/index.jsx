import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';


export function FormularioDeEventos({ temas, aoSubmeter }) {
  aoSubmeter
  function aoFormSubmetido(formData) {
    console.log('opa, tá na hora de criar um novo evento', formData);
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento);

  }
  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>

        Preencha para criar um evento:

      </TituloFormulario>
      <div className="campos">

        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id='nomeEvento'
            placeholder='summer dev hits'
            name='nomeEvento'
          />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            qual o enderço da imagem de capa
          </Label>
          <CampoDeEntrada
            type="text"
            id='capa'
            placeholder='http://...'
            name='capa'
          />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            name='dataEvento'
          />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Tema do evento
          </Label>
          <ListaSuspensa id="tema" nome="tema" itens={temas} />

        </CampoDeFormulario>

      </div>
      <div className='acoes'>
        <Botao>
          criar evento
        </Botao>
      </div>
    </form>
  )
}