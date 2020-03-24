Base (starters): son plantillas

1. ## Crear el proyecto
> gatsby new mi-sitio http://github.com/gatsbyjs/gatsby-starter-hello-world

2. ## Iniciar desarrollo
> gatsby develop

3. ## Instalar framework css
> npm install tailwindcss --save-dev

    La bandera --save-dev es para que sólo se guarde en desarrollo

4. ## Configurar tailwind
> npx tailwind init

5. ## Configurar nuevo plugin
> npm install --save gatsby-plugin-postcss

    Pegar el plugin 'gatsby-plugin-postcss' en gatsby-config.js en la sección de module.exports. Debe quedar así
>    plugins: ['gatsby-plugin-postcss']

6. ## Crear archivo de configuración css
    1. Crear archivo postcss.config.js en la raíz del proyecto
    2. Pegar el siguiente fragmento de código:
    > module.exports = () => {
        plugins: [require("tailwindcss")]
    }

7. ## Probar que gatsby esté funcionando con nuestros estilos
    7.1 Crear carpeta src/styles
    7.2 Crear archivo global.css
    7.3 Crear archivo gatsby-browser.js en la raíz del proyecto
    7.4 Poner en ese archivo
    > import "./src/styles/global.css"
    7.5 en global.css escribir
    > body {
        background: red;
    }