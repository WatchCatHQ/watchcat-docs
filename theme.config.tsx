import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image src="/watchcat_logo.svg" width={200} height={40} alt="watchcatdocs"/>,
  docsRepositoryBase: 'https://github.com/WatchCatHQ/watchcat-docs',
  darkMode: false,
  primaryHue: 245,
  footer: {
    text: 'WatchCat Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – WatchCat Docs'
    }
  }
}

export default config
