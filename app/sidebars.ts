import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/introduction', "guides/installation"],
    },
    // {
    //   type: 'category',
    //   label: 'Frameworks',
    //   items: ['frameworks/next', 'frameworks/react'],
    // },
    {
      type: 'category',
      label: 'Componentes',
      items: ['components/avatar', "components/button"],
    }
  ]

};

export default sidebars;
