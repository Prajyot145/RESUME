//alert("loading");
function addNewWeField() {
  //console.log("Adding new field")

  let newNode = document.createElement("textarea")
  newNode.classList.add("form-control")
  newNode.classList.add("weField")
  newNode.classList.add("mt-2")
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea")
  newNode.classList.add("form-control")
  newNode.classList.add("eqField")
  newNode.classList.add("mt-2")
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewCTField() {
  let newNode = document.createElement("textarea")
  newNode.classList.add("form-control")
  newNode.classList.add("ctField")
  newNode.classList.add("mt-2")
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("ct");
  let aqAddButtonOb = document.getElementById("ctAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating resume
function generateR() {
  //console.log("generating R");

  let nameField = document.getElementById("nameField").value;

  let nameT = document.getElementById("nameT");

  nameT1.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  document.getElementById("contactT").innerHTML = document.getElementById(
    "contactField"
  ).value;

  //address
  document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
  ).value;
  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value;
  document.getElementById("instaT").innerHTML = document.getElementById(
    "instaField"
  ).value;
  document.getElementById("linkedT").innerHTML = document.getElementById(
    "linkedField"
  ).value;

  //objective

  document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectiveField"
  ).value;

  //work Experience

  let wes = document.getElementsByClassName("weField")

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value}</li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //aq

  let aqs = document.getElementsByClassName('eqField')

  let str1 = ""

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //ct

  let cts = document.getElementsByClassName('ctField')

  let str2 = ""

  for (let e of cts) {
    str2 += `<li> ${e.value} </li>`;
  }

  document.getElementById("ctT").innerHTML = str2;

  //code for setting image

  let file = document.getElementById("imgField").files[0]

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  }

  document.getElementById('cv-form').style.display = "none";
  document.getElementById('cv-template').style.display = "block";
}

//print cv
function printR() {
  window.print();
}
