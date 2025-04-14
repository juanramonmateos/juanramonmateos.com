# ESTILOS (CSS)

Los estilos estarán todos definidos en la carpeta /src/style. Tendremos el siguiente esquema:

project-root/
- src/
  - style/
    - base/
      - reset.css
      - variables.css
      - typography.css
    - components/
      - titulos.css
      - .css
      - .css
    - pages/
      - index.css
      - musicalProfile.css

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

