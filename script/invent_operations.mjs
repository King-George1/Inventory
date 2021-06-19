import { inventory } from "./inventory.mjs";
let maxProductID = 1;
let totalItemQuantity = 0;
let subcategories = {};

const getTotalCartAndSubCatNum = () => {
  totalItemQuantity = 0;
  Object.keys(inventory).forEach((category) => {
    let ref = inventory[category];
    let subcat = Object.keys(ref);
    subcat.forEach((subcatName) => {
      let subcatNumber = 0;
      ref[subcatName].products.forEach((y) => {
        y.productID > maxProductID
          ? (maxProductID = y.productID)
          : (maxProductID = maxProductID);

        totalItemQuantity += y.quantity;
        subcatNumber += y.quantity;
      });
      subcategories[subcatName] = subcatNumber;
    });
  });
};

//Function responsible for adding new Items to the inventory;
const addItem = (
  cat_name,
  subcat_name,
  prodName,
  prodQuantity,
  prodPrice,
  prodDescription
) => {
  let newItem = {
    productID: maxProductID + 1,
    productName: prodName,
    quantity: prodQuantity,
    price_per_one: prodPrice,
    description: prodDescription,
  };
  inventory[cat_name][subcat_name].products.push(newItem);
  //   maxProductID++;

  //Here the function will update the items quantity and the subcategory items quantity
  getTotalCartAndSubCatNum();
};

//This function will get total number of items, the subcategories and their number and sets
//the maxProductID. This will function will be called in the window.onload.
getTotalCartAndSubCatNum();

//TEST FOR THE getTotalCartAndSubCatNum and test for addItem() method
//RESULT: FUNCTION PASSED TEST
// console.log("Total number of items before any action: " + totalItemQuantity);
// console.log("Subcategory items before insertion: ");
// console.log(subcategories);
// console.log("Maximum product ID before insertion: " + maxProductID);
// addItem("phone", "Pixel", "KingGeorge 6", 1, 2222, {});
// addItem("phone", "Galaxy", "Galaxy 999", 10, 3333, {});
// console.log("Maximum product ID after insertion: " + maxProductID);
// console.log("Subcategory items after insertion: ");
// console.log(subcategories);
// console.log("Total number of items before any action: " + totalItemQuantity);

const updateItemQuantity = (itemID, newQuantity) => {};
