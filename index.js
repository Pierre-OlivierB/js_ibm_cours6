// console.log("test");
const table = document.getElementById("table-mult-dim");
// console.log(table);
// var arrA = new Array();
var arrB = new Array();
var arrC = new Array();

// var arrAA = new Array();
// var arrAB = new Array();
// var arrAC = new Array();

// var arrAAA = new Array();
// var arrAAB = new Array();
// var arrAAC = new Array();
// var arrABA = new Array();
// var arrABB = new Array();
// var arrABC = new Array();
// var arrACA = new Array();
// var arrACB = new Array();
// var arrACC = new Array();

// arrA = ["data-A", "data-B", "data-C"];
arrB = ["data-AA", "data-BB", "data-CC"];
arrC = ["data-AAA", "data-BBB", "data-CCC"];

// for (let i = 0; i < arrA.length; i++) {
//   console.log(arrA[i]);
//   for (let j = 0; j < arrB.length; j++) {
//     console.log(arrB[j]);
//     for (let k = 0; k < arrC.length; k++) {
//       console.log(arrC[k]);
//     }
//   }
// }
// arrAA = ["data-AA", "data-AB", "data-AC"];
// arrAB = ["data-BA", "data-BB", "data-BC"];
// arrAC = ["data-CA", "data-CB", "data-CC"];

// arrAAA = ["data-CBA", "data-CBB", "data-CBD"];
// arrAAB = ["data-CBA", "data-CBB", "data-CBD"];
// arrAAC = ["data-CBA", "data-CBB", "data-CBD"];
// arrABA = ["data-CBA", "data-CBB", "data-CBD"];
// arrABB = ["data-CBA", "data-CBB", "data-CBD"];
// arrABC = ["data-CBA", "data-CBB", "data-CBD"];
// arrACA = ["data-CBA", "data-CBB", "data-CBD"];
// arrACB = ["data-CBA", "data-CBB", "data-CBD"];
// arrACC = ["data-CBA", "data-CBB", "data-CBD"];
//!-----------------------------------------------------

var arrA = new Array();

var arrAA = new Array();
var arrAB = new Array();
var arrAC = new Array();

var arrAAA = new Array();
var arrAAB = new Array();
var arrAAC = new Array();
var arrABA = new Array();
var arrABB = new Array();
var arrABC = new Array();
var arrACA = new Array();
var arrACB = new Array();
var arrACC = new Array();

arrAAA = ["data-AAA", "data-AAB", "data-AAC"];
arrAAB = ["data-ABA", "data-ABB", "data-ABC"];
arrAAC = ["data-ACA", "data-ACB", "data-ACC"];
arrABA = ["data-BAA", "data-BAB", "data-BAC"];
arrABB = ["data-BBA", "data-BBB", "data-BBC"];
arrABC = ["data-BCA", "data-BCB", "data-BCC"];
arrACA = ["data-CAA", "data-CAB", "data-CAC"];
arrACB = ["data-CBA", "data-CBB", "data-CBC"];
arrACC = ["data-CCA", "data-CCB", "data-CCC"];

arrAA = [arrAAA, arrAAB, arrAAC];
arrAB = [arrABA, arrABB, arrABC];
arrAC = [arrACA, arrACB, arrACC];

arrA = [arrAA, arrAB, arrAC];

try {
  for (let i = 0; i < 4; i++) {
    //   console.log(arrA[i]);
    // table.innerHTML = `<tr>`;
    for (let j = 0; j < arrA[i].length; j++) {
      // console.log(arrA[i][j]);
      // arrA[i][j];

      for (let k = 0; k < arrA[i][j].length; k++) {
        //   console.log("test");
        console.log(arrA[i][j][k]);
        // table.innerHTML = `<td>${arrA[i][j][k]}</td>`;
      }
      //   table.innerHTML = `</tr>`;
    }
  }
} catch (tata) {
  if (tata instanceof TypeError) {
    console.log("coucou Olivier");
  }
  console.log(tata);
} finally {
  console.log("coucou");
}
