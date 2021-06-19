import { inventory } from "./inventory.mjs";
let maxProductID = 1;
let totalItemQuantity = 0;
let subcategories = {};

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
    productID: maxProductID,
    productName: prodName,
    quantity: prodQuantity,
    price_per_one: prodPrice,
    description: prodDescription,
  };
  inventory[cat_name][subcat_name].products.push(newItem);
  maxProductID++;
};

//Getting and setting the maximum productID from the product Storage
Object.keys(inventory).forEach((subcat) => {
  let miniCart = Object.keys(inventory[subcat]);
  miniCart.forEach((product) => {
    inventory[subcat][product]["products"].forEach((singleProduct) => {
      singleProduct.productID > maxProductID
        ? (maxProductID = singleProduct.productID)
        : (maxProductID = maxProductID);
    });
  });
});

//Test For the addItem() method
//RESULT: FUNCTION PASSED TEST
// console.log(maxProductID);
// addItem("phone","Pixel","KingGeorge 6", 10, 2222, {});
// console.log(inventory['phone']['Pixel']);
// console.log(maxProductID);

const getTotalCartAndSubCatNum = () => {
  totalItemQuantity = 0;
  Object.keys(inventory).forEach((category) => {
    let ref = inventory[category];
    let subcat = Object.keys(ref);
    subcat.forEach((subcatName) => {
      let subcatNumber = 0;
      ref[subcatName].products.forEach((y) => {
        totalItemQuantity += y.quantity;
        subcatNumber += y.quantity;
      });
      subcategories[subcatName] = subcatNumber;
    });
  });
};

//TEST FOR THE getTotalCartAndSubCatNum
//RESULT: FUNCTION PASSED TEST
// getTotalCartAndSubCatNum();
// console.log(totalItemQuantity);
// console.log(subcategories);
// console.log("Maximum product ID before insertion: " + maxProductID);
// addItem("phone", "Pixel", "KingGeorge 6", 1, 2222, {});
// console.log("Maximum product ID after insertion: " + maxProductID);
// getTotalCartAndSubCatNum();
// console.log(totalItemQuantity);
// console.log(subcategories);
