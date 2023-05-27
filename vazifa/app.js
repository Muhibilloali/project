let username = prompt("Isminggiz va familyangizni kiriting");

// 1-SAVOL

let test1 = prompt(
  "1) HTML so'zining to'liq nomi nima? \n  A) Cascading Style SHeets\n  B) HyperText Markup Language \n  C) Bilmayman \n  D)O'zing Top"
);
let ism = document.getElementById("name");
let savol1 = document.getElementById("savol1");
let result1 = document.getElementById("result1");
let right1 = document.getElementById("right1");
/*let num1 = document.getElementById("num1")*/
let result2 = document.getElementById("result2");
let right2 = document.getElementById("right2");
let result3 = document.getElementById("result3");
let right3 = document.getElementById("right3");
let result4 = document.getElementById("result4");
let right4 = document.getElementById("right4");
let result5 = document.getElementById("result5");
let right5 = document.getElementById("right5");
let result6 = document.getElementById("result6");
let right6 = document.getElementById("right6");
let result7 = document.getElementById("result7");
let right7 = document.getElementById("right7");
/*let natija1 = document.getElementById("natija1")*/

ism.innerHTML = username;
document.write("<br/>");
savol1.innerHTML =
  "1-savol" + "\n " + "Sizning javobingiz" + " " + test1 + " " + " " + " ";
if (test1 == "B") {
  result1.innerHTML = "JAVOBİNGİZ TO'G'Rİ";
  result1.classList.add("success");
  /*if (result1.innerHTML == "JAVOBİNGİZ TO'G'Rİ"){
    num1 x++
  }else {
    num1  x--
  }*/
} else {
  result1.innerHTML = "JAVOBİNGİZ XATO";
  result1.classList.add("wrong");
  right1.classList.add("truth");
  right1.innerHTML = "TO'G'Rİ JAVOB B";
}

// 2-SAVOL

let test2 = prompt(
  "2) <h1> va <h6>ning farqi nimada? \n A) Uzunligida \n B) Hajmida \n C) Darajasida \n  D) O'zing Top "
);
let savol2 = document.getElementById("savol2");

document.write("<br/>");
savol2.innerHTML =
  "2-savol" + "\n" + "Sizning javobingiz" + " " + test2 + " " + " " + " ";
if (test2 == "C") {
  result2.innerHTML = "JAVOBİNGİZ TO'G'Rİ";
  result2.classList.add("success");
} else {
  result2.innerHTML = "JAVOBİNGİZ XATO ";
  result2.classList.add("wrong");
  right2.classList.add("truth");
  right2.innerHTML = "TO'G'Rİ JAVOB C";
}

// 3-SAVOL

let test3 = prompt(
  "3) increment va decrementning farqi nimada? \n A)increment bu- a++, decrement bu- a-- \n B)increment bu- a--, decrement bu- a++ \n C)increment bu- a+-, decrement bu- a-+ \n D) O'zing Top "
);
let savol3 = document.getElementById("savol3");

document.write("<br/>");
savol3.innerHTML =
  "3-savol" + "\n" + "Sizning javobingiz" + " " + test3 + " " + " " + " ";
if (test3 == "A") {
  result3.innerHTML = "JAVOBİNGİZ TO'G'Rİ";
  result3.classList.add("success");
} else {
  result3.innerHTML = "JAVOBİNGİZ XATO";
  result3.classList.add("wrong");
  right3.classList.add("truth");
  right3.innerHTML = "TO'G'Rİ JAVOB A";
}

// 4-SAVOL

let test4 = prompt(
  "4) Soat ixtiro qilinganda soat nechi bo'lgan? \n A)11-35 \n B)12-25 \n C)12-46 \n D)Javobi aniq bo'lmagan savol "
);
let savol4 = document.getElementById("savol4");

document.write("<br/>");
savol4.innerHTML =
  "4-savol" + "\n" + "Sizning javobingiz" + " " + test4 + " " + " " + " ";
if (test4 == "D") {
  result4.innerHTML = "JAVOBİNGİZ TO'G'Rİ";
  result4.classList.add("success");
} else {
  result4.innerHTML = "JAVOBİNGİZ XATO";
  result4.classList.add("wrong");
  right4.classList.add("truth");
  right4.innerHTML = "TO'G'Rİ JAVOB D";
}

// 5-savol

let test5 = prompt(
  "5) <!DOCTYPE html>ning vazifasi nima? \n A)HTML3 ekanligini ko'rsatadi \n B)HTML4 ekanligini ko'rsatadi \n C) HTML5 ekanligini ko'rsatadi \n D)Bilmayman"
);
let savol5 = document.getElementById("savol5");
document.write("<br/>");
savol5.innerHTML =
  "5-savol" + "\n" + "Sizning javobingiz" + " " + test5 + " " + " " + " ";
if (test5 == "C") {
  result5.innerHTML = "JAVOBİNGİZ TO'G'Rİ";
  result5.classList.add("success");
} else {
  result5.innerHTML = "JAVOBİGİZ XATO";
  result5.classList.add("wrong");
  right5.classList.add("truth");
  right5.innerHTML = "TO'G'Rİ JAVOB C";
}

// 6-savol

let test6 = prompt(
  "6) HTML faylida JavaScript kodlari qaysi tegda yoziladi? \n A)<head></head> \n B)<script></script> \n C)<body></body> \n D)<html></html>"
);
let savol6 = document.getElementById("savol6");
document.write("<br/>");
savol6.innerHTML =
  "6-savol" + "\n" + "Sizning Javobingiz" + " " + test6 + " " + " " + " ";
if (test6 == "B") {
  result6.innerHTML = "JAVOBİNGİZ TO'G'Rİ";
  result6.classList.add("success");
} else {
  result6.innerHTML = "JAVOBİGİZ XATO";
  result6.classList.add("wrong");
  right6.classList.add("truth");
  right6.innerHTML = "TO'G'Rİ JAVOB B";
}

let test7 = prompt(
  "7) Math.round() - nima ish bajaradi? \n A)Bu funksiya raqamlarni ko'aytirish uchun ishlatiladi \n B)Bu funksiyasi raqamlarni yaxlitlash uchun ishlatiladi \n C)Bu unksiya raqamlarni qo'shish uchun ishlatiladi \n D)Bu funksiya raqamlarni bo'lish uchun ishlatiladi"
);
let savol7 = document.getElementById("savol7");
document.write("<br/>");
savol7.innerHTML =
  "7-savol" + "\n" + "Sizning Javobingiz" + " " + test7 + " " + " " + " ";
if (test7 == "B") {
  result7.innerHTML = "JAVOBİNGİZ TO'G'Rİ";
  result7.classList.add("success");
} else {
  result7.innerHTML = "JAVOBİGİZ XATO";
  result7.classList.add("wrong");
  right7.classList.add("truth");
  right7.innerHTML = "TO'G'Rİ JAVOB B";
}
/*let natija1 = (prompt)
if (test1, test2, test3, test4, test5, test6, test7 == success){
  document.write(gif.gif)
}else {
  document.write("Sizning javoblaringiz")
}*/  

