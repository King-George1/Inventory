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
    console.log(productName, pricePerOne, prodManufacturer, prodStorage, prodRAM, prodBattery, prodDisplay);
    toggleBackDrop();
    toggleEditModal();

}, false)


