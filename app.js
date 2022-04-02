const iptCep = document.querySelector("#ipt-cep");
const btnSearch = document.querySelector("button");

class Address {
  constructor(cep, rua, bairro, cidade, uf, ddd) {
    this.cep = cep;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.ddd = ddd;
  }

  getAdress() {}
}

btnSearch.addEventListener("click", () => {
  if (iptCep.value !== "") {
  } else {
    console.log("vazio");
  }
});
