# Nomenclaturas

## Nombres de Commits (Standard)

  El estándar a utilizar para este proyecto sigue algunas de las pautas del
  siguiente recurso: https://www.conventionalcommits.org/es/v1.0.0/

### feat: Nueva funcionalidad

```bash copy
git commit -m "feat: add login"
```

### fix: Corrección

```bash copy
git commit -m "fix: localstorage bug"
```

### ui: Estilo

```bash copy
git commit -m "ui: add dark mode"
```

### docs: Documentación

```bash copy
git commit -m "docs: update README.md"
```

### refactor: Refactorización

```bash copy
git commit -m "refactor: hook register"
```

### test: Pruebas

```bash copy
git commit -m "test: write tests for login"
```

### chore: Cambios de configuración

```bash copy
git commit -m "chore: update package.json"
```

## Convención de Nombres

### PascalCase

Ejemplo: `InputForm`, `BaseButton`, `UserResponse`

Se utilizará esta forma de nombrar a los componentes, interfaces y tipos.

### CamelCase

Ejemplo: `handleClick`, `firstName`, `errorMessage`

Se utilizará esta forma de nombrar a las funciones y variables.

### SnakeUpperCase

Ejemplo: `PI`, `API_URL`, `MAX_AGE`

Se utilizará esta forma de nombrar a las constantes.