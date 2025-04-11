import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/vitejs.svg'
      }
    ]
  ],
  title: 'Inicio',
  titleTemplate: ':title - Proyectos IT Docs',
  description: 'Documentación para proyectos',
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Proyectos IT Docs',
    logo: {
      src: '/vitejs.svg',
      alt: 'Logo de Vite'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar'
          },
          modal: {
            backButtonTitle: 'Regresar',
            displayDetails: 'Mostrar detalles',
            footer: {
              closeKeyAriaLabel: 'Cerrar',
              closeText: 'Cerrar',
              selectKeyAriaLabel: 'Seleccionar',
              selectText: 'Seleccionar',
              navigateDownKeyAriaLabel: 'Ir hacia abajo',
              navigateUpKeyAriaLabel: 'Ir hacia arriba',
              navigateText: 'Ir hacia arriba/abajo'
            },
            noResultsText: 'Sin resultados en la búsqueda',
            resetButtonTitle: 'Limpiar'
          }
        }
      }
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/buenas-practicas' }
    ],

    sidebar: [
      {
        text: 'Buenas Prácticas',
        link: '/buenas-practicas'
      },
      {
        text: 'VS Code: Extensiones',
        link: '/extensiones'
      },
      {
        text: 'Optimización',
        link: '/optimizacion'
      },
      {
        text: 'Nomenclaturas',
        link: '/nomenclaturas'
      },
      {
        text: 'Configuraciones',
        link: '/configuraciones'
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/PedroVegaDev/Proyectos-IT-Docs'
      }
    ],

    returnToTopLabel: 'Volver arriba',
    darkModeSwitchLabel: 'Cambiar tema',
    sidebarMenuLabel: 'Menú',
    notFound: {
      code: '404',
      title: 'Página no encontrada',
      quote: 'Parece que hemos perdido la pista',
      linkText: 'Ir al inicio',
      linkLabel: 'Ir al inicio'
    },
    docFooter: {
      next: 'Siguiente',
      prev: 'Anterior'
    },
    outline: {
      label: 'Contenido'
    }
  }
})
