import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import packageJson from './package.json'

const config: DocsThemeConfig = {
  faviconGlyph: '✨',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Proyectos IT Docs'
    }
  },
  banner: {
    dismissible: false,
    key: 'banner-proyectos-it',
    text: `🚧 Proyectos IT Docs v${packageJson.version} en construcción 🚧`
  },
  logo: <span>Proyectos IT</span>,
  project: {
    link: 'https://github.com/PedroVegaDamian/Proyectos-IT-Docs'
  },
  chat: {
    link: 'https://discord.gg/jDtHaETYpx'
  },
  sidebar: {
    defaultMenuCollapseLevel: 2
  },
  docsRepositoryBase: 'https://github.com/PedroVegaDamian/Proyectos-IT-Docs',
  editLink: {
    text: 'Editar esta página'
  },
  feedback: {
    content: '¿Pregunta? Danos tu opinión →'
  },
  toc: {
    title: 'En Esta Página',
    float: true,
    backToTop: true
  },
  gitTimestamp: ({ timestamp }) => (
    <div>
      Última actualización:{' '}
      {Intl.DateTimeFormat('es-ES', {
        dateStyle: 'short',
        timeStyle: 'short'
      }).format(timestamp)}
    </div>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="#" target="_blank">
          Proyectos IT
        </a>
      </span>
    )
  },
  search: {
    placeholder: 'Buscar en documentación..'
  }
}

export default config
