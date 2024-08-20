# Landign Page MalePet Care

Landing page en español para la empresa de cuidado de mascota MalePet Care.

Basado en la [plantilla.](https://github.com/web3templates/nextly-template)

Landing page in spanish for MalePet Care, a pet care company.

Based on the [Nextly template.](https://github.com/web3templates/nextly-template)

- RESPONSIVE
- Light-Dark Theme

Demo [HERE](https://spjhon.github.io/project-MALE/)

## Stack

- Next js 14 App Router
- TypeScript
- Tailwind js

### Smaller Libraries

- react-vertical-timeline-component
- react-swipeable
- react-responsive-modal
- react-photoswipe-gallery
- react-hook-form
- photoswipe
- next-themes
- http-server (testing after build)
- react icons

### Overview

El projecto es relativamente sencillo, consta de 4 paginas en donde la unica que tiene interactivdad compleja es "Home", todos los componente se encuentran en la carpeta "components" y ciertos componentes que se componen de 2 o mas componentes se encuentran en su propia carpeta. Todos los datos para los componentes y props se extraen de un archivo js llamado "data.js", cada componente es independiente y se utiliza tailwind para el tema oscuro. Los types de typescritp se encuentran en cada componente, todas las imagenes se importan desde la carpeta public, cada component posee comentarios sobre su funcionamiento tanto en español como en ingles.

The project is relatively simple, consisting of four pages, with "Home" being the only one with complex interactivity. All components are located in the "components" folder, and components composed of two or more subcomponents are placed in their own folder. All data for the components and props are extracted from a JavaScript file called "data.js". Each component is independent, and Tailwind is used for the dark theme. TypeScript types are defined within each component. All images are imported from the "public" folder, and each component includes comments about its functionality in both Spanish and English.

### Como usar (how to use)

- Download: `git clone https://github.com/spjhon/project-MALE.git`
- Install: `npm install` to install dependencies
- Run Dev Mode: `npm run dev` to run on localHost
- Run build to create static website: `npm run build`, it will create a folder called "out" on the project directory, use `npx http-server -p 8080` on that directory so it can run the static files on the localhost.

![Screenshot](/public/screencapture-spjhon-github-io-project-MALE-2024-08-20-15_44_07.png)
