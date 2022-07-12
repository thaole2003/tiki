let ssp=0

var sl = document.getElementById("sp");
var plus = document.getElementById("plus");


function cong() {
  ssp++;

}  
function tru() {
  if (ssp > 0) {
    ssp--;
    
  }
  sl.innerHTML=ssp
}

console.log(ssp);
// mua hàng
function muahang() {
  plus.innerText = ssp;
}
