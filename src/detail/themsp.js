 // thêm sản phẩm
 let ssp = 0

// trừ sản phẩm
let elementssp = document.getElementById("ssp") 
function tru() {
    if (ssp > 0) {
        ssp--
    }
    let elementssp = document.getElementById("ssp") 
    elementssp.innerHTML = ssp
    console.log("tru")
}
// cộng sản phẩm
function cong() {
    let elementssp = document.getElementById("ssp") 
        ssp++
    elementssp.innerHTML = ssp
    console.log("cong")

}
// mua hàng 
let slsp = 0 
let elemenslsp= document.getElementById("plus") 
function muahang() {
    let elementssp = document.getElementById("ssp") 
    console.log(slsp)
    slsp +=  ssp
    elemenslsp.innerHTML = slsp 
    if(ssp !== 0 ){
 elementssp.innerHTML = ssp
    }
   
   
}
