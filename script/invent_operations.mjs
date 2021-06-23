import { inventory } from "./inventory.mjs";
let maxProductID = 1;
let totalItemQuantity = 0;
let subcategories = {};

const getTotalCatAndSubCatNum = () => {
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
  getTotalCatAndSubCatNum();
};

//This function will get total number of items, the subcategories and their number and sets
//the maxProductID. This will function will be called in the window.onload.
getTotalCatAndSubCatNum();

//TEST FOR THE getTotalCatAndSubCatNum and test for addItem() method
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

const getProductRef = (catName, subCatName, productID) => {
  let prodRef = inventory[catName][subCatName].products;
  let product = prodRef.find((x) => x.productID === productID);
  return product;
};

//The updateItemQuantity updates a specify product quantity. The function parameters
//will be taken from the UI click event is fired on the update quantity button
const updateItemQuantity = (catName, subCatName, productID, newQuantity) => {
  let product = getProductRef(catName, subCatName, productID);
  product.quantity = newQuantity;
};

// TEST FOR updateItemQuantity() function. Status: PASSED
// console.log("Total number of items before quantity update: " + totalItemQuantity);
// console.log("Subcategory items before insertion: ");
// console.log(subcategories);
// updateItemQuantity("phone","iPhone",5, 20);
// getTotalCatAndSubCatNum();
// console.log("Total number of items after quantity update: " + totalItemQuantity);
// console.log("Subcategory items after insertion: ");
// console.log(subcategories);

//Function updateItemDetails is responsible for updating item detais given its
//catname, subcatname, and productID
const updateItemDetails = (catName, subCatName, productID, newDetails) => {
  let product = getProductRef(catName, subCatName, productID);
  product.description["storage"] = newDetails["storage"];
  product.description["RAM"] = newDetails["RAM"];
  product.description["battery"] = newDetails["battery"];
  product.description["display"] = newDetails["display"];
  product["productName"] = newDetails["productName"];
  product["price_per_one"] = newDetails["price_per_one"];
};

//TEST FOR UPDATE PRODUCT DETAILS. STATUS: PASSED
// let details = {
//   storage: '900GB',
//   RAM: '90GB',
//   battery: '9999mAh',
//   display: '30 inches',
//   productName: 'KING KING',
//   price_per_one: 10000
// };
// console.log("Total number of items before details update: " + totalItemQuantity);
// console.log("Subcategory items before details update: ");
// console.log(subcategories);
// updateItemDetails('phone','Pixel', 1, details);
// console.log(inventory['phone']['Pixel']['products'][0]);
// console.log("Total number of items after details update: " + totalItemQuantity);
// console.log("Subcategory items after details update: ");
// console.log(subcategories);
// console.log(inventory['phone']['Pixel']['products']);

const removeItem = (catName, subCatName, productID) => {
  let prodRef = inventory[catName][subCatName].products;
  let productIndex = prodRef.findIndex((x) => x.productID === productID);
  if(productIndex > -1){
    prodRef.splice(productIndex, 1);
  getTotalCatAndSubCatNum();
  }
}

//TEST FOR THE REMOVE ITEM STATUS: PASSED
// console.log("Total number of items before details update: " + totalItemQuantity);
// console.log("Subcategory items before item removal: ");
// console.log(subcategories);
// removeItem('phone','Pixel',1);
// console.log("Total number of items after items removal: " + totalItemQuantity);
// console.log("Subcategory items after item removal: ");
// console.log(subcategories);
// removeItem('phone','Pixel',2);
// removeItem('phone','iPhone',6);
// console.log("Total number of items after items removal: " + totalItemQuantity);
// console.log("Subcategory items after item removal: ");
// console.log(subcategories);