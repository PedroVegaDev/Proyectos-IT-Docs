import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import packageJson from "./package.json";

const config: DocsThemeConfig = {
  banner: {
    dismissible: false,
    key: "banner-proyectos-it",
    text: `🚧 Proyectos IT Docs v${packageJson.version} en construcción 🚧`,
  },
  logo: <span>Proyectos IT</span>,
  project: {
    link: "https://github.com/PedroVegaDamian/Orimi",
  },
  chat: {
    link: "https://discord.gg/Rw684wXd",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase: "https://github.com/PedroVegaDamian/Orimi",
  // editLink: {
  //   component: null,
  // },
  // feedback: {
  //   content: null,
  // },
  toc: {
    float: true,
    backToTop: true,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="#" target="_blank">
          Proyectos IT
        </a>
      </span>
    ),
  },
  search: {
    placeholder: "Buscar documentación..",
  },
};

export default config;
