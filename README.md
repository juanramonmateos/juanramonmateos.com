# VERSIÓN

0.0

# INTRODUCCIÓN

El objetivo de esta página es el de servir de carta de presentación de Juan Ramón Mateos, diferenciando dos dimensiones: la profesional y la artística/musical. El sitio web pretende servir como una tarjeta personal y profesional que poder compartir con las personas y empresas/organizaciones a las que interese presentarse. Asimismo, poder contar con un sitio web que exponga toda la formación, las capacidades y herramientas y que puedan ser de utilidad.

La página se desarrollará siguiendo una estricta semántica de HTML5, de tal manera que el posicionamiento SEO sea el mejor posible. Esta memoria pretende establecer unas pautas que pueda seguir cualquier desarrollador a la hora de actualizar el sitio o añadir contenido.

El sitio vendrá dado por una página de inicio con un menú de dos opciones:
- Perfil profesional
- Perfil artístico
De los dos enlaces colgarán dos "sub-sitios" que seguirán un mismo estilo css, pero contenido distinto en los elementos que se presupondrían comunes en un sitio web: el header/footer...: el contenido de estos contenedores variará dependiendo de si estamos en una página que "cuelgue" de "Perfil profesional" o "Perfil musical", como el correo de contacto, los enlaces o el propio logo de la página.

# ESTRUCTURA DEL PROYECTO

La estructura de carpetas y archivos seguirá el siguiente esquema:

project-root/
├── public/
│   ├── index.html
│   └── [resto de archivos y carpetas de /src/]
├── src/
│   ├── index.html
│   ├── PerfilMusical.html
│   ├── PerfilProfesional.html
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── videos/
│   ├── css/
│   │   ├── base/
│   │   │   ├── common_elements.css/
│   │   │   └──
│   │   ├── components/
│   │   └── pages/
│   └── js/
│       ├── components/
│       ├── utils/
│       └── services/
├── .gitignore
├── README.md
└── package.json

Carpeta



# INSTALACIÓN Y ENTORNO DE DESARROLLO



# ESTRUCTURA HTML

## index.html

En el index tendremos una página con una cabecera que contendrá un div con el logo y un cuerpo con una imagen y dos enlaces.
Estos dos enlaces serán para dirigirnos o bien la parte del perfil profesional o bien a la del perfil musical.

Quedaría así:

- body
    - header
        - div
            - img
    - main
        - img
        - a
        - a



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

El sitio web está ideado para ser responsive para 4 tipos de pantalla:
- Extendidas (pantallasExtendidas.css), a partir de 1440 píxeles   - HERENCIA HACIA ARRIBA
- Escritorio (estilosComunes.css), entre 1439 y 992 píxeles        - TODOS LOS ESTILOS
- Tableta (tabletas.css), entre 991 y 768 píxeles                  - HERENCIA HACIA ABAJO
- Móvil (moviles.css), menos de 767 píxeles                        - HERENCIA HACIA ABAJO

Los estilos se aplicarán usando herencia:
- Hacia abajo desde estilosComunes.css hacia moviles.css
- Hacia arriba desde estilosComunes.css hacia pantallasxtendidas.css.
Estamos aplicando entonces el principio de "Desktop First", dejando todos los estilos comumes de en estilosComunes.css para posteriormente heredar hacia arriba o hacia abajo según proceda por el tipo de pantalla.



# FUNCIONALIDAD DE JAVASCRIPT

# PROCESOS DE ACTUALIZACIÓN Y MANTENIMIENTO

## Añadir una nueva página

Para añadir una nueva página html, dependiendo de si estamos en la parte de PerfilProfesional o PerfilMusical, empezamos exactamente con el siguiente código de base:

PerfilProfesional:

```html



```


PerfilMusical:

```html



```

------------
Estos códigos tienen la estructura básica propia de cada página: 
- El header, con
    - Logo
    - Menú de opciones
    - 

- El footer, con
    - Enlaces de contacto
    - Enlaces a redes
    - Correo de contacto
    - Elementos propios de cada "sub-sitio"

Adicionalmente a todo esto, hay que actualizar el archivo .htaccess para configurar la nueva página dentro de la ruta "juanramonmateos.com/PerfilProfesional/" o "juanramonmateos.com/PerfilMusical/", según proceda


## Añadir contenido a una página existente

Dependiendo de si añadimos contenido a un elemento común del sitio web (como header o footer) o de si lo añadimos a una parte propia de la página, tenemos

### Actualizar un elemento común html del sitio

1º Creamos, teniendo todo el sitio en local, un nuevo archivo prueba_elementos_comunes.html en la carpeta /src y copiamos el código base correspondiente del apartado "Añadir una nueva página". Este código base nos mostrará un nuevo template con todos los elementos comunes del sitio rellenos. Ahora toca actualizarlos a nuestro gusto.

2º Una vez lo hemos probado y vemos que queda bien, procedemos a guardarlo.

3º

### Añadir contenido en un elemento común del sitio
 