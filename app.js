const iptCep = document.querySelector("#ipt-cep");
const btnSearch = document.querySelector("button");
const fields = document.querySelector(".info-container");
const errorModal = document.querySelector(".error-modal");

const getAdress = (cep) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      for (const key in data) {
        if (key === "logradouro") fields.children[0].value = data[key];
        if (key === "bairro") fields.children[1].value = data[key];
        if (key === "localidade") fields.children[2].value = data[key];
        if (key === "uf") fields.children[3].value = data[key];
        if (key === "ddd") fields.children[4].value = data[key];
      }
    })
    .catch((error) => {
      errorMessage();
    });
};

const errorMessage = () => {
  if (iptCep.value.length < 8) {
    errorModal.classList.remove("hidden");
    setTimeout(() => {
      errorModal.classList.add("hidden");
    }, 3500);
  }
};

iptCep.addEventListener("input", () => {
  if (!isNaN(Number(iptCep.value))) iptCep.value = iptCep.value;
  else iptCep.value = "";
});

btnSearch.addEventListener("click", () => {
  getAdress(iptCep.value);
});
