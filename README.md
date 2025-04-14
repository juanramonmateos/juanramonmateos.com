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


# EN CADA CARPETA DEL PROYECTO HAY UN ARCHIVO README.MD CON INFORMACIÓN RELEVANTE



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

