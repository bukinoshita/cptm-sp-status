export type Line = {
  DataGeracao: string
  Descricao: string
  LinhaId: string
  Nome: string
  Tipo: string
  Status: string
}

export type Lines = Line[]

export type ParsedLines = {
  updatedAt: string
  description: string
  id: string
  status: string
  type: string
  name: string
}[]

export const allowedLines = ['CORAL', 'DIAMANTE', 'ESMERALDA', 'JADE', 'RUBI', 'SAFIRA', 'TURQUESA']

export const parser = (payload: Lines): ParsedLines => {
  const reducer = (acc: any, line: Line) => {
    if (allowedLines.includes(line.Nome)) {
      return [
        ...acc,
        {
          updatedAt: line.DataGeracao,
          description: line.Descricao,
          id: line.LinhaId,
          status: line.Status,
          type: line.Tipo,
          name: line.Nome,
        },
      ]
    }

    return acc
  }

  return payload.reduce(reducer, [])
}
