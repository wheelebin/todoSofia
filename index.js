const inputField = document.querySelector("input");

// Funktion för att lägga till en ny vara
const addItem = () => {
  // Hämta värdet från inputfältet
  const input = inputField.value;

  // Hämta listan från local storage
  const itemList = JSON.parse(localStorage.getItem("itemList"));

  // Skapa ett nytt objekt med id, namn och pris
  const item = { id: itemList.length + 1, name: input, price: 100 };

  // Lägg till objektet i listan
  itemList.push(item);

  // Spara listan i local storage
  localStorage.setItem("itemList", JSON.stringify(itemList));

  // Rensa inputfältet
  inputField.value = "";

  // Uppdatera DOM med nya listan
  renderItems();
};

// Funktion för att rendera (Updatera DOM) listan
const renderItems = () => {
  // Hämta listan från local storage
  let itemList = JSON.parse(localStorage.getItem("itemList"));

  // Hämta elementet som ska innehålla listan
  const list = document.querySelector("#list");

  // Rensa listan
  list.innerHTML = "";

  // Loopa igenom listan och skapa en div för varje objekt
  itemList.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `${item.id} - ${item.name} - ${item.price} SEK`;
    list.appendChild(listItem);
  });
};

const start = () => {
  // Hämta listan från local storage
  let itemList = JSON.parse(localStorage.getItem("itemList"));

  // Om listan inte finns i local storage, skapa en tom lista och hämta den
  if (!itemList) {
    localStorage.setItem("itemList", JSON.stringify([]));
  }

  renderItems();
};

start();
