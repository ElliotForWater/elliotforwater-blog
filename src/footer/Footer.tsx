import React from 'react';

import { Config } from '../utils/Config';
import { FooterIconList } from './FooterIconList';

const Footer = () => (
  <footer className="max-w-screen-md px-3 py-4 mx-auto text-gray-500 text-sm grid grid-cols-1 gap-y-3 sm:grid-cols-2">
    <div className="text-center sm:text-left">
      {`© Copyright ${new Date().getFullYear()} ${Config.site_name}`}
    </div>

    <FooterIconList />
  </footer>
);

export { Footer };
