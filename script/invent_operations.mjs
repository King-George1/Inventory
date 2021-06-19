import { inventory } from "./inventory.mjs";
let maxProductID = 1;

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
