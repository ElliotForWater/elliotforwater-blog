import React, { ReactNode } from 'react';

type ISidebarBlock = {
  title: string;
  children: ReactNode;
};

const SidebarBlock = (props: ISidebarBlock) => (
  <div className="sidebar-block my-10">
    <div className="text-lg text-center">{props.title}</div>
    <div className="h-1 w-10 rounded bg-primary my-3 mx-auto" />
    {props.children}

    <style jsx>
      {`
        .sidebar-block {
          @apply leading-7 text-gray-600;
        }
      `}
    </style>
  </div>
);

export { SidebarBlock };
