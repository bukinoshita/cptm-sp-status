import { api } from './utils/api'
import { parser, Lines, ParsedLines } from './utils/parser'

export const cptmStatus = async (): Promise<ParsedLines> => {
  const { data }: { data: Lines } = await api('LinhasMetropolitanasAppV3?versao=4')
  return parser(data)
}
