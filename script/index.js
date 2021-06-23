// ACCORDION;
let acc =Array.from(document.querySelectorAll(".accordion-icon"));
let i;
let checkboxes = Array.from(document.querySelectorAll('.firstProduct'));
let subcatcheckboxes = Array.from(document.querySelectorAll('.subcatAct'));

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
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
    let itemID = ref.children[5].innerHTML;
    let itemCat = ref.children[6].innerHTML;
    let itemSub = ref.children[7].innerHTML;
    return [itemID, itemCat, itemSub];
}

// output[0] is itemID, output[1] is CategoryName, output[2] is subcategory name
//Editing product details
document.querySelector('span.editprod').addEventListener('click', (e)=>{  
    let output = getProductDetails(e);
    console.log(output[0], output[1], output[2]);
}, false);

//Removing products from the inventory
document.querySelector('span.deleteprod').addEventListener('click', (e)=>{
    let output = getProductDetails(e);
    console.log(output[0], output[1], output[2]);
}, false);

document.querySelector('span.updatequan').addEventListener('click', (e)=>{
    let output = getProductDetails(e);
    console.log(output[0], output[1], output[2]);
}, false);


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
