import type { CharacterKey } from '@genshin-optimizer/zzz/consts'
import { getCharStat } from '../../../char'

const key: CharacterKey = 'Ellen'
const data_gen = getCharStat(key)

let b = 0, d = 0, s = 0, c = 0 , a = 0

// TODO: Load scalings
const dm = {
  basic: {
    attackA: data_gen.skillParams.basic[b++],
  },
  dodge: {
    attackA: data_gen.skillParams.dodge[d++],
  },
  special: {
    attackA: data_gen.skillParams.special[s++],
  },
  chain: {
    attackA: data_gen.skillParams.chain[c++],
  },
  assist: {
    attackA: data_gen.skillParams.assist[a++],
  },
} as const

export default dm
