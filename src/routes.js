

import Reader from './components/Reader'
import Surah from './components/Surah'

const routes= [
    {path: "/", component: Reader },
    {path: "/surah", component: Surah , name:"about"},
]
export default routes;
