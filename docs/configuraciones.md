# Configuraciones Generales

## Prettier

En el archivo `.prettierrc` puedes configurar el formato de los archivos de tu código.

```json copy showLineNumbers filename=".prettierrc"
{
  "semi": false, // omite el punto y coma al final de cada línea
  "singleQuote": true, // cambia las comillas dobles "" por simples ''
  "arrowParens": "avoid", // evita el paréntesis en las funciones flechas con un parámetro
  "bracketSpacing": true, // agrega espacios entre llaves
  "trailingComma": "none" // no agrega comas al final de las líneas
}
```

## Vite

### Alias

En el archivo `vite.config.ts` puedes configurar los alias de tus carpetas.

```ts {8-12} copy showLineNumbers filename="vite.config.ts"
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

En el archivo `tsconfig.json` configuran los alias para que typescript lo reconozca.

```json {4-7} copy showLineNumbers filename="tsconfig.json"
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```