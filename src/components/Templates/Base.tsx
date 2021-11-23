import React, { ReactNode } from 'react'

import { Footer } from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'

type IMainProps = {
  meta: ReactNode
  hero: ReactNode
  children: ReactNode
}

const Base = (props: IMainProps) => (
  <div className='antialiased w-full text-gray-700'>
    {props.meta}

    <Header />

    {props.hero}

    {props.children}

    <cookie-policy />

    <Footer />

    <Modal.Host />
  </div>
)

export { Base }
