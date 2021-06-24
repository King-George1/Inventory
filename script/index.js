// ACCORDION;
let acc =Array.from(document.getElementsByClassName("accordion-icon"));
let i;
let checkboxes = Array.from(document.getElementsByClassName('firstProduct'));
let subcatcheckboxes = Array.from(document.getElementsByClassName('subcatAct'));
const editModal = document.getElementById("modal-edit");
const deleteModal = document.getElementById("modal-delete");
const backDrop = document.getElementById("backdrop");


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

const toggleBackDrop = (_) => {
    backDrop.classList.toggle("visible");
  };

const toggleEditModal = () => {
    editModal.classList.toggle('visible');
}
const toggleDeleteModal = () => {
    deleteModal.classList.toggle('visible');
}
// output[0] is itemID, output[1] is CategoryName, output[2] is subcategory name
//Editing product details
Array.from(document.getElementsByClassName('editprod')).forEach(item =>{
    item.addEventListener('click', (e)=>{  
        let output = getProductDetails(e);
        console.log(output[0], output[1], output[2]);
        editModal.classList.toggle("visible");
        toggleBackDrop();
    }, false);
})

//Removing products from the inventory
Array.from(document.getElementsByClassName('deleteprod')).forEach(item => {
    item.addEventListener('click', (e)=>{
        let output = getProductDetails(e);
        console.log(output[0], output[1], output[2]);
        deleteModal.classList.toggle("visible");
        toggleBackDrop();
    }, false);
})

Array.from(document.getElementsByClassName('updatequan')).forEach(item => {
    item.addEventListener('click', (e)=>{
        let output = getProductDetails(e);
        console.log(output[0], output[1], output[2]);
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


