const formulario = document.querySelector("#formulario");
const tarefa = document.querySelector("#tarefa");
const conteudo = document.querySelector("#conteudo");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const elemento = document.createElement("div");
  elemento.className = "tarefa"
  const texto = document.createElement("span");
  texto.textContent = tarefa.value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
      texto.style.textDecoration = "line-through";
      elemento.classList.add("concluido")
    } else {
      texto.style.textDecoration = "none";
      elemento.classList.remove("concluido")

    }
  });

  const excluir = document.createElement("button");
  excluir.textContent = "Excluir";

  excluir.addEventListener("click", () => {
    conteudo.removeChild(elemento);
  });

  elemento.append(checkbox, texto, excluir);

  conteudo.appendChild(elemento);

  tarefa.value = "";
  tarefa.focus();
});
