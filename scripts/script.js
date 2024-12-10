document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("phone").value != ""
  ) {
    alert("Pronto! Em breve você receberá nosso contato.");
  } else {
    alert("Por favor, preencha os campos nome e email.");
  }
}


