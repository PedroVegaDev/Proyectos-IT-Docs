import Link from "next/link";

export const HomePage = () => {
  return (
    // TODO: Cambiar css por tailwind
    <main className="home">
      <h1 className="home__title">Documentación de Proyectos IT</h1>
      <p className="home__description">
        La documentación para Proyectos de IT es crucial para comprender que
        estándares y procesos se utilizan para crear y gestionar software.
      </p>
      <Link
        href="/docs"
        className="home__button nx-bg-black/[.05] dark:nx-bg-gray-50/10"
      >
        Empezar
      </Link>
    </main>
  );
};
