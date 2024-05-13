let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const deDropDown = document.getElementById("de-moedas-select");
const paraDropDown = document.getElementById("para-moedas-select");
//criar menu drop down
moedas.forEach((moeda) => {
  const option = document.createElement("option");
  option.value = moeda;
  option.text = moeda;
  deDropDown.add(option);
});
// próx. menu drop down
moedas.forEach((moeda) => {
  const option = document.createElement("option");
  option.value = moeda;
  option.text = moeda;
  paraDropDown.add(option);
});
//valores padrão
deDropDown.value = "BRL";
paraDropDown.value = "USD";
let converterMoedas = () => {
  //referências
  const quantia = document.querySelector("#amount").value;
  const deMoeda = deDropDown.value;
  const paraMoeda = paraDropDown.value;
  //
  if (quantia.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let de = data.conversion_rates[deMoeda];
        let para = data.conversion_rates[paraMoeda];
        const valorConvertido = (quantia / de) * para;
        result.innerHTML = `${quantia} ${deMoeda} = ${valorConvertido.toFixed(
          2
        )} ${paraMoeda}`;
      });
  } else {
    // qdo vazio
    alert("Por favor informe a quantia!");
  }
};
document
  .querySelector("#botao")
  .addEventListener("click", converterMoedas);
window.addEventListener("load", converterMoedas);

/*const convert = document.getElementById("convert")
const result  = document.getElementById("result")
const from  = document.getElementById("from")
const to  = document.getElementById("to")
const quantia  = document.getElementById("quantia")
const resultado = 50;
convert.addEventListener("click", function (e) {
    console.log(result)
    result.hidden = false;
    result.innerHTML = `Valor ${quantia.value} ${from.value.toUpperCase()} convertido para ${resultado} ${to.value.toUpperCase()}`
});*/