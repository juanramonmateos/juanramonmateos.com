document.addEventListener('DOMContentLoaded', () => {
  if (location.hostname === "juanjramonmateos.com") {
    const mapaRutas = {
      "/pages/en/musicalProfile/artistic.html": "/artistic",
      "/pages/en/musicalProfile/music.html": "/music",
      "/pages/es/perfilMusical/musica.html": "/musica",
      "/pages/es/perfilMusical/artistico.html": "/artistico",
      "/pages/es/index-es.html": "/es"
    };

    document.querySelectorAll('a[href]').forEach(enlace => {
      const originalHref = enlace.getAttribute('href');
      try {
        const urlResuelta = new URL(originalHref, window.location.href);
        const ruta = urlResuelta.pathname;

        if (mapaRutas[ruta]) {
          enlace.setAttribute('href', mapaRutas[ruta]);
        }
      } catch (e) {
        console.warn("No se pudo resolver:", originalHref);
      }
    });
  }
});
