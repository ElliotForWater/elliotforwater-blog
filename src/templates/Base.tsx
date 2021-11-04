import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Footer } from '../footer/Footer';
import { Navbar } from '../navigation/Navbar';

type IMainProps = {
  meta: ReactNode;
  hero: ReactNode;
  children: ReactNode;
};

const Base = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <Navbar>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
    </Navbar>

    {props.hero}

    {props.children}

    <Footer />
  </div>
);

export { Base };
