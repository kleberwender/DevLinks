toggleMode = () => {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if(html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light e mudar o alt
    img.setAttribute("src", "../assets/avatar_kleber.jpg")
    img.setAttribute("alt", "foto para o tema dark de kleber de Brito usando oculos de Grau Palitó preto Camisa Branca e gravata azul")
  } else {
    // se tiver sem light mode, adicionar a imagem normal e mudar o alt
    img.setAttribute("src", "../assets/avatar_kleber.jpg")
    img.setAttribute("alt", "foto para o tema dark de kleber de Brito usando oculos de Grau Palitó preto Camisa Branca e gravata azul")
  }
}