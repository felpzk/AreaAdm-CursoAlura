import { IConsulta } from "../../types/IConsulta"
import { IProfissional } from "../../types/IProfissional"

interface IDados {
  nome: string
  consultas: number
}

interface useDadosGraficosProps {
  profissionais: IProfissional[] | null,
  consultas: IConsulta[] | null
}

export const useDadosGraficos = ({ profissionais, consultas } : useDadosGraficosProps) => {
  let dados: Array<IDados> = []

  if(profissionais && consultas) {
    dados = profissionais.map((profissional) => ({
      nome: profissional.nome,
      consultas: consultas.filter((consulta) =>
        consulta.profissional.some((prof) => prof.nome === profissional.nome)
      ).length
    }))
  }

  return dados
}