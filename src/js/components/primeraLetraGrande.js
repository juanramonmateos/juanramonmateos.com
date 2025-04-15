document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.getElementById("tituloPrincipal");
    const palabras = elemento.textContent.split(" ");
  
    const procesadas = palabras.map(palabra => {
      if (palabra.length === 0) return "";
      const primera = `<span class="primera-letra">${palabra[0]}</span>`;
      const resto = palabra.slice(1);
      return primera + resto;
    });
  
    elemento.innerHTML = procesadas.join(" ");
  });