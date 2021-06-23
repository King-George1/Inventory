//JAVASCRIPT DOM OPERATIONS
let inventory = {
  phone: {
    Pixel: {
      manufacturer: "Google",
      products: [
        {
          productID: 1,
          productName: "Pixel 5",
          quantity: 5,
          price_per_one: 1200,
          description: {
            storage: "128GB, no slot card",
            RAM: "8GB",
            battery: "4080mAh",
            display: "6.0",
          },
        },
        {
          productID: 2,
          productName: "Pixel 4a 5G",
          quantity: 12,
          price_per_one: 1005,
          description: {
            storage: "128GB, no slot card",
            RAM: "6GB",
            battery: "3885mAh",
            display: "6.2",
          },
        },
      ],
    },
    Galaxy: {
      manufacturer: "Samsung",
      products: [
        {
          productID: 3,
          productName: "Galaxy A22 5G",
          quantity: 2,
          price_per_one: 1500,
          description: {
            storage: "128GB",
            RAM: "8GB",
            battery: "5000mAh",
            display: "6.6",
          },
        },
        {
          productID: 4,
          productName: "Galaxy A22",
          quantity: 15,
          image: 'imgs/image1.png',
          price_per_one: 1005,
          description: {
            storage: "128GB",
            RAM: "6GB",
            battery: "5000mAh",
            display: "6.4",
          },
        },
      ],
    },
    iPhone: {
      manufacturer: "Apple",
      products: [
        {
          productID: 5,
          productName: "iPhone 12 Pro Max",
          quantity: 3,
          price_per_one: 6000,
          description: {
            storage: "512GB",
            RAM: "6GB",
            battery: "3687mAh",
            display: "6.7",
          },
        },
        {
          productID: 6,
          productName: "iPhone 12 Pro",
          quantity: 21,
          price_per_one: 4890,
          description: {
            storage: "512GB",
            RAM: "6GB",
            battery: "2815mAh",
            display: "6.1",
          },
        },
        {
          productID: 8,
          productName: "iPhone 12 Mini",
          quantity: 10,
          price_per_one: 2890,
          description: {
            storage: "256GB",
            RAM: "4GB",
            battery: "2227mAh",
            display: "5.4",
          },
        },
        {
          productID: 7,
          productName: "iPhone 12",
          quantity: 12,
          price_per_one: 1005,
          description: {
            storage: "256GB",
            RAM: "4GB",
            battery: "2815mAh",
            display: "6.1",
          },
        },
      ],
    },
  },
  laptop: {},
  tablet: {},
};

let totalItemQuantity = 0;
let subcategories = {};

const getTotalCatAndSubCatNum = () => {
  totalItemQuantity = 0;
  Object.keys(inventories).forEach((category) => {
    let ref = inventories[category];
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
sessionStorage.setItem("invent", JSON.stringify(inventory));

let productsBody = document.querySelector(".product-body");
let anotherDiv = document.createElement("div");
let inventories = JSON.parse(sessionStorage.getItem("invent"));
getTotalCatAndSubCatNum();

const populateProducts = (subCatProducts) => {
  let output = "";
  subCatProducts.forEach((singleProduct) => {
    output += `
        <div class="panel-contents">
                                <div></div>
                                <div></div>
                                <div>
                                    <input type="checkbox" class="firstProduct" name="firstProduct" value="Product1">
                                    ${singleProduct.productName}
                                </div> 
                                <div>
                                Storage: ${singleProduct.description.storage}
                                </div>
                                <div>Samsung</div>
                                <div>${singleProduct.productID}</div>
                                <div>Phone</div>
                                <div>GH₵${singleProduct.price_per_one}</div>
                                <div>${singleProduct.quantity}</div>
                                <div class="product-actions">
                                    <span class="editprod"><i class="far fa-edit"></i> &nbsp;</span>
                                    <span class="deleteprod"><i class="far fa-trash-alt"></i> &nbsp;</span>
                                    <span class="updatequan"><i class="fas fa-plus"></i> &nbsp;&nbsp;</span>
                                </div>
                            </div>
        `;
  });
  return output;
};

productsBody.appendChild(anotherDiv);
Object.keys(inventories).forEach((category) => {
  let ref = inventory[category];
  let subcat = Object.keys(ref);
  subcat.forEach((subcatName) => {
    anotherDiv.innerHTML += `
      
      <button class="accordion">
      <div class="accordion-icon"><i class="zmdi zmdi-chevron-down"></i></div>
      <div>
      <input type="checkbox" class="subcatAct" name="subcatAct" value="Product1">
      </div>
      <div>${subcatName}</div>
      <div></div>
      <div>${inventories[category][subcatName]["manufacturer"]}</div>
      <div></div>
      <div>${category}</div>
      <div></div>
      <div>${subcategories[subcatName]}</div>
      <div class="editing">
          <span class="editprodSub"><i class="far fa-edit"></i>&nbsp;</span>
          <span class="deleteprodSub"><i class="far fa-trash-alt"></i></span>
      </div>
      </button>
      
      <div class="panel">
    
      ${populateProducts(inventories[category][subcatName]["products"])}
     
      </div>
      
      

      `;
  });
});
