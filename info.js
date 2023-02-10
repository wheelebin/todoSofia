// Use local storage

// Skapa en array med objekt
const itemListTest = [
  { id: 1, name: "Milk", price: 100 },
  { id: 2, name: "Bread", price: 50 },
  { id: 3, name: "Eggs", price: 200 },
  { id: 4, name: "Cheese", price: 300 },
];

// Konvertera arrayen till en sträng
const itemListConvertedToString = JSON.stringify(itemListTest);

// Spara strängen i local storage
localStorage.setItem("itemListTest", itemListConvertedToString);

// Hämta strängen från local storage
const itemListAsString = localStorage.getItem("itemListTest");

// Konvertera strängen tillbaka till en array så att den kan användas som vanligt
const itemListConvertedToObject = JSON.parse(itemListAsString);
