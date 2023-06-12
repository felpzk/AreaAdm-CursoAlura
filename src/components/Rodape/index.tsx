import facebook from './assets/facebook.png'
import whats from './assets/whatsapp.png'
import insta from './assets/instagram.png'
import google from './assets/google.png'
import styled from 'styled-components'

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
  gap: 2rem;
`

const ItemEstilizado = styled.li`
  list-style-type: none;
`

export function Rodape() {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="#">
            <img src={facebook} alt="Logo facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={whats} alt="Logo whatsapp" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={insta} alt="Logo instagram" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={google} alt="Logo google" />
          </a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
    </RodapeEstilizado>
  )
}