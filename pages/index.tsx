import type { NextPage } from 'next'

import SecAbout from '../components/pages/SecAbout'
import SecInput from '../components/pages/SecInput'
import SecOutput from '../components/pages/SecOutput'


const Home: NextPage = () => {

    return (
        <div>
            <SecAbout />
            <SecInput />
            <SecOutput />
        </div>
    )
}

export default Home
