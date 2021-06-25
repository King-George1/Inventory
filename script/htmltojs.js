

//JAVASCRIPT DOM OPERATIONS
window.onload = () => {
    let inventories = '';
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
              }
            ]
          },
        },
        laptop: {
          Pixel: {
              manufacturer: "Google",
              products: [
                {
                  productID: 9,
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
                  productID: 10,
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
            }
        },
        tablet: {},
      };
    if(sessionStorage.getItem('myInventory') === null){
        sessionStorage.setItem('myInventory', JSON.stringify(inventory))
        sessionStorage['myInventory'] = JSON.stringify(inventory)
        inventories = JSON.parse(sessionStorage.getItem('myInventory'));
    }
    else{
        console.log("welcome starter");
        inventories = JSON.parse(sessionStorage.getItem('myInventory'));
    }

console.log(inventories);


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
// sessionStorage.setItem("invent", JSON.stringify(inventory));

let productsBody = document.querySelector(".product-body");
let anotherDiv = document.createElement("div");
// let inventories = JSON.parse(sessionStorage.getItem("invent"));
getTotalCatAndSubCatNum();

const populateProducts = (subCatProducts, subcatName, cate, manufacturer) => {
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
                                <div>${manufacturer}</div>
                                <div>000${singleProduct.productID}</div>
                                <div id="${cate}">${subcatName}</div>
                                <div>GH₵${singleProduct.price_per_one}</div>
                                <div>${singleProduct.quantity}</div>
                                <div class="product-actions">
                                    <span class="editprod"><i class="far fa-edit"></i></span>
                                    <span class="deleteprod"><i class="far fa-trash-alt"></i></span>
                                    <span class="updatequan"><i class="fas fa-plus"></i> <i class="fas fa-minus"></i>&nbsp;</span>
                                    
                                </div>
                            </div>
        `;
  });
  return output;
};

productsBody.appendChild(anotherDiv);
Object.keys(inventories).forEach((category) => {
  let ref = inventories[category];
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
          <span class="editprodSub"><i class="far fa-edit"></i></span>
          <span class="deleteprodSub"><i class="far fa-trash-alt"></i></span>
          <span class="addprodSub"><i class="fas fa-plus"></i></span>
      </div>
      </button>
      
      <div class="panel">
    
      ${populateProducts(inventories[category][subcatName]["products"], subcatName,category, inventories[category][subcatName]["manufacturer"] )}
     
      </div>
      
      

      `;
  });
});





// ACCORDION;
let acc =Array.from(document.getElementsByClassName("accordion-icon"));
let i;
let checkboxes = Array.from(document.getElementsByClassName('firstProduct'));
let subcatcheckboxes = Array.from(document.getElementsByClassName('subcatAct'));
const editModal = document.getElementById("modal-edit");
const deleteModal = document.getElementById("modal-delete");
const qtyUpdateModal = document.getElementById("modal-qty-update");
const backDrop = document.getElementById("backdrop");
let productCategoryName = "";
let productSubCatName = "";
let singleProductID = 0;


const getProductRef = (catName, subCatName, productID) => {
    let prodRef = inventories[catName][subCatName].products;
    let product = prodRef.find((x) => x.productID === productID);
    return product;
  };

const updateItemDetails = (catName, subCatName, productID, newDetails) => {
    let product = getProductRef(catName, subCatName, productID);
    product.description["storage"] = newDetails["storage"];
    product.description["RAM"] = newDetails["RAM"];
    product.description["battery"] = newDetails["battery"];
    product.description["display"] = newDetails["display"];
    product["productName"] = newDetails["productName"];
    product["price_per_one"] = newDetails["price_per_one"];

    sessionStorage.setItem('myInventory', JSON.stringify(inventories))
  };


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log("object");
    this.classList.toggle("active");
    let panel = this.nextElementSibling.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// EventListeners for Product
checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    checkbox.addEventListener('CheckboxStateChange', (e) => {
        let editsIcons = e.target.parentElement.parentElement.lastChild.previousElementSibling;
        (e.target.checked)
        ? editsIcons.style.display = "block"
        : editsIcons.style.display = "none";
    }, false);
});

//EventListeners for Subcategory
subcatcheckboxes.forEach(subcheckbox => {
    subcheckbox.checked = false;
    subcheckbox.addEventListener('CheckboxStateChange', (e) => {
        let editIcons = e.target.parentElement.parentElement.lastChild.previousElementSibling;
        (e.target.checked)
        ? editIcons.style.display = "block"
        : editIcons.style.display = "none";
    }, false)
})

const getProductDetails = (event) => {
    let ref = event.target.parentElement.parentElement.parentElement;
    let itemID = parseInt(ref.children[5].innerHTML);
    let itemBrand = ref.children[6].innerHTML;
    let itemCart = ref.children[6].getAttribute('id');
    let itemSub = ref.children[7].innerHTML;
    return [itemID, itemBrand, itemSub, itemCart];
}

const toggleBackDrop = (_) => {
    backDrop.classList.toggle("visible");
  };

const toggleEditModal = () => {
    editModal.classList.toggle('visible');
}
const toggleDeleteModal = () => {
    deleteModal.classList.toggle('visible');
}
const toggleQtyUpdateModal = () => {
    qtyUpdateModal.classList.toggle('visible');
}
// output[0] is itemID, output[1] is subcategory or brandName, output[3] is category name
//Editing product details
Array.from(document.getElementsByClassName('editprod')).forEach(item =>{
    item.addEventListener('click', (e)=>{  
        let output = getProductDetails(e);
        singleProductID = output[0];
        productCategoryName = output[3];
        productSubCatName = output[1];
        console.log(output[0], output[1], output[2], output[3]);
        editModal.classList.toggle("visible");
        toggleBackDrop();
    }, false);
})

//Removing products from the inventory
Array.from(document.getElementsByClassName('deleteprod')).forEach(item => {
    item.addEventListener('click', (e)=>{
        let output = getProductDetails(e);
        console.log(output[0], output[1], output[2], output[3]);
        deleteModal.classList.toggle("visible");
        toggleBackDrop();
    }, false);
})

Array.from(document.getElementsByClassName('updatequan')).forEach(item => {
    item.addEventListener('click', (e)=>{
        let output = getProductDetails(e);
        console.log(output[0], output[1], output[2], output[3]);
        qtyUpdateModal.classList.toggle("visible");
        toggleBackDrop();
    }, false);  
})


const getCategoriesDetails = (event) => {
    let ref = event.target.parentElement.parentElement.parentElement;
    let itemID = ref.children[2].innerHTML;
    let itemCat = ref.children[4].innerHTML;
    let itemSub = ref.children[6].innerHTML;
    return [itemID, itemCat, itemSub];
}

//output[0] is the subcategory name, output[1] is the manufacturer name and output[2] is the category name
//Editing category details
document.querySelector('span.editprodSub').addEventListener('click', (e)=>{
    let output = getCategoriesDetails(e);
    console.log(output[0], output[1], output[2]);
}, false);

document.querySelector('span.deleteprodSub').addEventListener('click', (e)=>{
    let output = getCategoriesDetails(e);
    console.log(output[0], output[1], output[2]);
}, false);


document.querySelector('.cancelUpdate').addEventListener('click',(e) => {
    toggleBackDrop();
    toggleEditModal();
})

document.querySelector('.cancelDelete').addEventListener('click',(e) => {
    toggleBackDrop();
    toggleDeleteModal();
})
document.querySelector('.cancelQtyUpdate').addEventListener('click',(e) => {
    toggleBackDrop();
    toggleQtyUpdateModal();
})

const clearInputValues = (input1, input2, input3, input4, input5, input6, input7) => {
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
    input6.value = "";
    input7.value = "";
}

document.querySelector('.doUpdate').addEventListener('click', (e) => {
    let TheName = document.getElementById('pName');
    let ThePrice = document.getElementById('pPrice');
    let TheManufacturer = document.getElementById('pManufacturer');
    let TheStorage = document.getElementById('pStorage');
    let TheRAM = document.getElementById('pRAM');
    let TheBattery = document.getElementById('pBattery');
    let TheDisplay = document.getElementById('pDisplay');

    let productName = TheName.value;
    let pricePerOne = ThePrice.value;
    let prodManufacturer = TheManufacturer.value;
    let prodStorage = TheStorage.value;
    let prodRAM = TheRAM.value;
    let prodBattery = TheBattery.value;
    let prodDisplay = TheDisplay.value;

    let newProdDetails = {storage: prodStorage, RAM: prodRAM, battery: prodBattery, display: prodDisplay, productName:productName, price_per_one:pricePerOne};

    updateItemDetails(productCategoryName, productSubCatName, singleProductID, newProdDetails);
    clearInputValues(TheName, ThePrice, TheManufacturer, TheStorage, TheRAM, TheBattery, TheDisplay);
    // console.log(productName, pricePerOne, prodManufacturer, prodStorage, prodRAM, prodBattery, prodDisplay);
    toggleBackDrop();
    toggleEditModal();
    //Update the sessionStorage
    location.reload();

}, false)






}
