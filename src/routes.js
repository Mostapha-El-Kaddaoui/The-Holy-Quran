

import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'

const routes= [
    {path: "/", component: HomePage },
    {path: "/surah", component: AboutUs , name:"about"},
]
export default routes;