import React from 'react'

import { Hero } from '../hero/Hero'
import { Meta } from '../layout/Meta'
import { Base } from '../templates/Base'
import { Config } from '../utils/Config'

const Index = () => (
  <Base
    meta={<Meta title={Config.title} description={Config.description} />}
    hero={<Hero title={Config.title} description={Config.description} />}
  >
    Index page
  </Base>
)

export default Index
