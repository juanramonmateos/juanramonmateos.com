# VERSIÓN

0.0

# INTRODUCCIÓN

El objetivo de esta página es el de servir de carta de presentación de Juan Ramón Mateos, diferenciando dos dimensiones: la profesional y la artística/musical. El sitio web pretende servir como una tarjeta personal y profesional que poder compartir con las personas y empresas/organizaciones a las que interese presentarse. Asimismo, poder contar con un sitio web que exponga toda la formación, las capacidades y herramientas y que puedan ser de utilidad.

La página se desarrollará siguiendo una estricta semántica de HTML5, de tal manera que el posicionamiento SEO sea el mejor posible. Esta memoria pretende establecer unas pautas que pueda seguir cualquier desarrollador a la hora de actualizar el sitio o añadir contenido.

El sitio vendrá dado por una página de inicio con un menú de dos opciones:
- Perfil profesional
- Perfil artístico
De los dos enlaces colgarán dos "sub-sitios" que seguirán un mismo estilo css, pero el contenido será distinto incluso en los elementos que se presupondrían comunes en un sitio web: el header/footer...: el contenido de estos contenedores variará dependiendo de si estamos en una página que "cuelgue" de "Perfil profesional" o "Perfil musical", como el correo de contacto, los enlaces o el propio logo de la página.

# ESTRUCTURA DEL PROYECTO

La estructura de carpetas y archivos del desarrollo seguirá el siguiente esquema:

JUANRAMONMATEOS.COM/
- public/                           Sitio web que se alojará en el hosting
- src/                              Carpeta de desarrollo
    - assets/                       Archivos multimedia 
        - audio/
        - fonts/
        - images/
        - videos/
    - pages/                        Páginas HTML
        - en/
            - musicalProfile/
            - professionalProfile/
        - es/
            - perfilMusical/
            - perfilProfesional/
            - error.html
    - js/                           Javascript
        - components/
        - services/
        - utils/
    - sass/                         Preprocesador de CSS
    - style/                        Carpeta de estilos
        - base/
        - components/
        - pages/
- .htaccess
- index.html
- sitemap.xml
- README.md                         Este propio archivo

# ENTORNO DE TRABAJO

Las herramientas con las que se está desarrollando este proyecto son:
- VisualStudio Code para la codificación con las siguientes extensiones:
    - Live Server - de Ritwick Dey
    - Sass (.sass only) - de Syler
    - Prettier - de Prettier

- Prepos

- Firefox Developer Edition (depuración)

# ESTRUCTURA HTML

## index.html

En el index tendremos una página con una cabecera que contendrá un div con el logo y un cuerpo con una imagen y dos enlaces.
Estos dos enlaces serán para dirigirnos o bien la parte del perfil profesional o bien a la del perfil musical.

Quedaría así:

- body
  - header
    - h1
    - nav
      - a
      - a
  - main
    - div
    - div
    - div
  - footer
    - nav
      - ul
        - li
          - a
        - ...
    - p

# ESTILOS (CSS)

Los estilos estarán todos definidos en la carpeta /src/style. Tendremos el siguiente esquema:

project-root/
├── src/
│   └── style/
│       ├── base/
│       │   ├── reset.css
│       │   ├── variables.css
│       │   └── typography.css
│       ├── components/
│       │   ├── titulos.css
│       │   ├── .css
│       │   └── .css
│       └── pages/
│           ├── menuPrincipal.css
│           ├── perfilMusical.css
│           └── perfilProfesional.css

En base/ tendremos los estilos base de la página:
- reset.css: aseguramos consistencia en el estilo entre navegadores. Eliminamos o ajustamos los estilos predeterminados de los navegadores.
- variables.css: 


## SOBRE RESPONSIVE

El sitio web seguirá un modelo Mobile First. Los estilos comunes entonces estarán para las pantallas más pequeñas y se propagarán hacia las más grandes, siguiendo los siguientes puntos de ruptura:
- hasta 768
- de 769 a 1024
- de 1025 a 1441
- a partir de 1441
Además, también se tendrá en consideración la orientación de la página.

No obstante, como cada archivo HTML tiene sus CSS dedicados en la sección style/pages, Estos criterios pueden diferir (por ejemplo, no considerando la orientación de la página)

# FUNCIONALIDAD DE JAVASCRIPT

