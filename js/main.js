// let elements = []; //ստեղծում ենք դատարկ զանգված
// function addElement(){  //ստեղծում ենք ֆունկցիա onclick իրադարձության համար
//     if(document.querySelector(".addTxt").value.trim() !=""){    //Функция trim () возвращает строку после удаления символа пробела из этой строки с начала и с конца строки.
//         elements.push(document.querySelector(".addTxt").value.trim()) // ստուգում ենք եթե input ի միջի գրածը հավասար չէ դատարկ,ապա տպի հենց այդ արժեքը
//         alert(elements)
//         display();
//     }
// }

//window.onload (ֆունկցիա) պատուհանը բացվելուց աշխատի ֆունկցիան
// JSON.parse() - մեթոդ է որը stringify  արածը localStorage -ից հետ կվերադարձնի օբյեկտի տեսքով


let elements = [];
window.onload = () => {
  elements.innerHTML = ''
  if (JSON.parse(localStorage.getItem("elements")) != null)
    elements = JSON.parse(localStorage.getItem("elements"));
  display();
};
function addElement() {
  if (document.querySelector(".addTxt").value.trim() != "") {
    elements.push(document.querySelector(".addTxt").value.trim());
    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
  }
}
function display() {
  elements.innerHTML = ''
  document.querySelector(".list").innerHTML = "";
  for (let i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div class='element'>" +
      elements[i] +
      "<img class='tick' src = './img/check.png' onclick='strike(" +
      i +
      ")'><img class='dustbin' src = './img/trash.png' onclick='del(" +
      i +
      ")'></div></center><br>";

}
function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
function strike(index) {
  if (elements[index].includes("<strike>")) {
    elements[index] = elements[index].replace("<strike>", "");
  } else {
    elements[index] = "<strike>" + elements[index] + "</strike>";
  }
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
