const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//to select each currency
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    //to select default currency
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

//set default value to one
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  //Building the API URL for request different currency
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  try {
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    let data = await response.json();

    console.log("API Response:", data);

    //to check validate response
    if (
      !data[fromCurr.value.toLowerCase()] ||
      !data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
    ) {
      throw new Error("Invalid currency conversion data");
    }

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate; //user ammount * rate
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${
      toCurr.value //tofixed2 for 2 numbers after decimal
    }`;
  } catch (error) {
    //if error it will display this
    console.error("Error fetching exchange rate:", error);
    msg.innerText = "Error fetching exchange rate. Please try again later.";
  }
};

//to change country flag
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img"); //it selects the img from parent element of select
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault(); //for prevent reloading data and browser's default behavior
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});

//for convert currency when hit enter key
window.addEventListener("keydown", (event) => {
  let key = event.key;
  if (key === "Enter") {
    updateExchangeRate();
  }
});
