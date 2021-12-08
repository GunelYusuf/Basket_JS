// let obj={
//     name:"Gunel",
//     age:26
// }

// let data=JSON.stringify(obj);
// console.log(JSON.parse(data));

let allBtn=document.querySelectorAll('.btn');
// let arr=[];
SetBasket();

allBtn.forEach(btn=>
    btn.onclick=function (e) {
         e.preventDefault();
        let id=this.parentElement.parentElement.getAttribute('data-id');
        SetBasket();
        let localStorgaeArray=JSON.parse(localStorage.getItem('basket'));
        let existProduct=localStorgaeArray.find(g=>g.id===id);
         if(existProduct===undefined){
            localStorgaeArray.push({
                id:id,
                name:this.parentElement.firstElementChild.innerText,
                count:1,
                price:this.previousElementSibling.innerText,
                src:this.parentElement.parentElement.firstElementChild.getAttribute('src')
                
            })
         }else
         {
            existProduct.count+=1;
            existProduct.price*=existProduct.count;
         };
         localStorage.setItem('basket',JSON.stringify(localStorgaeArray));
         GetBasketCount();
       
       
    });

    function GetBasketCount() {
        let localStorgaeArray=JSON.parse(localStorage.getItem('basket'));
        document.getElementById('BasketCount').innerText=localStorgaeArray.length;
    }
    GetBasketCount();

    function SetBasket() {
        if(!localStorage.getItem('basket')){
            localStorage.setItem('basket',JSON.stringify([]));
        }
    }