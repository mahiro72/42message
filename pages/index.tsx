import type { NextPage } from 'next'

import SecAbout from '../components/pages/SecAbout'
import SecMessage from '../components/pages/SecMessage'
import SecResult from '../components/pages/SecResult'

const Home: NextPage = () => {
  return (
    <div>
        <SecAbout />
        <SecMessage />
        <SecResult />
    </div>
  )
}

export default Home
