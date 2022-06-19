let korzinkaArray = JSON.parse(localStorage.getItem('korzinkaProduct'))||[];

const productMore=document.querySelector('.product-more');

function korzinkaniEkrangaChiqarish() {
 productMore.innerHTML = "";
    korzinkaArray.forEach((product, index, array) => {
   productMore.innerHTML += `<div class="card-product">
      <div class="card-images">
      <img src="${product.surat}" class="card-img-top" alt="...">
      <div class="card-content">
        <h5 class="card-title">${product.nom}</h5>
        <h6 class="card-title">Turi: ${product.kategoriya}</h6>
        <h6 class="card-title">Holat: ${product.holat}</h6>
        <h6 class="card-title">Narx: ${product.narx}$</h6>
        <p class="card-title">${new Date (product.vaqt).toLocaleString()}</p>
   <i class="bi bi-trash3" onclick="korzinkaArraydanOlibTashlash(${index})" style="color:red;cursor:pointer; font-size:1.5rem; margin-left:12px;"></i>
   </div>
   </div>
    </div>`;
    });
  }
  korzinkaniEkrangaChiqarish()

  //Tanlangan mahsulotni korzinkaArraydan olib tashlash 
  function korzinkaArraydanOlibTashlash(index) {
    korzinkaArray.splice(index, 1);
    korzinkaniEkrangaChiqarish(korzinkaArray);
    localStorage.setItem('korzinkaProduct',JSON.stringify(korzinkaArray))
    // console.log(korzinkaArray);
  }