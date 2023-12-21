import axios from 'axios';
/* import { wontons } from '../../../../../data/menu.json' */
import { WontonTypes } from '@zocom/types'

type MenuApi = WontonTypes[];


export function getMenu(): Promise<MenuApi> {
    return axios.get<WontonTypes[]>("menu.json")
    .then((res) => res.data);
}