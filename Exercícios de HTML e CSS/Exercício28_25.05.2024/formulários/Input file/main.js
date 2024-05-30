const body = document.querySelector("body")
const main = document.getElementsByTagName("main")[0]
const container_res = document.createElement("div")
const btn = document.getElementById("btn")
const input = document.getElementById("arquivos")

btn.addEventListener("click", clicar)
container_res.classList.add("container_res")

function clicar() {
  let h3 = document.createElement("h3")
  let inpt = input.files
  
  main.style.display = "none"
  
  if (inpt.length === 0) {
    window.alert("Adcione algum arquivo, por favor")
  } else {
    body.appendChild(container_res)
    container_res.appendChild(h3)
    
    h3.innerHTML = "Seu MAC e IP são meus agora!"
    h3.style.textAlign = "center"
  }
  
  
}