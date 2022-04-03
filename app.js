const iptCep = document.querySelector("#ipt-cep");
const btnSearch = document.querySelector("#btn-submit");
const btnPrint = document.querySelector("#btn-print");
const fields = document.querySelectorAll(".info-container input[type='text']");
const errorModal = document.querySelector(".error-modal");

const getAdress = (cep) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      for (const key in data) {
        if (key === "logradouro") fields[0].value = data[key];
        if (key === "bairro") fields[1].value = data[key];
        if (key === "localidade") fields[2].value = data[key];
        if (key === "uf") fields[2].value += "/" + data[key];
        if (key === "ddd") fields[3].value = data[key];
      }
    })
    .catch((error) => {
      errorMessage();
    });
};

const errorMessage = () => {
  if (iptCep.value.length < 8) errorModal.classList.remove("hidden");
  setTimeout(() => {
    errorModal.classList.add("hidden");
  }, 3500);
};

iptCep.addEventListener("input", () => {
  if (!isNaN(Number(iptCep.value))) iptCep.value = iptCep.value;
  else iptCep.value = "";
});

btnSearch.addEventListener("click", () => {
  getAdress(iptCep.value);
});

btnPrint.addEventListener("click", () => {
  window.print();
});
