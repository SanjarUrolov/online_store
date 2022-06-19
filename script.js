
// Form submit bo'lganda refresh bo'lishini oldini olish
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
  });
  
  // Navbar burgerini ochilib yopilishi
  const navBurger = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navUl = document.querySelector('.ul');
    // const navUlli = document.querySelectorAll('.nav-ul li');
  
    menuBtn.addEventListener('click', () => {
      navUl.classList.toggle('active');
      // document.body.classList.toggle('.body')
      menuBtn.classList.toggle('toggle');
    });
  };
  navBurger();
  
  const cartPage=()=>{
    const cartImg=document.querySelector('.cart-img');
    cartImg.addEventListener('click',()=>{
      window.location.href='korzinka.html';
    })
  }
  cartPage();
  
  let i=0;
  let images=[];
  let time=3000;
  
  images[0]=`https://c8.alamy.com/comp/2AKDFHW/shopping-cart-and-laptop-computer-with-products-on-wood-bokeh-background-shop-online-concept-2AKDFHW.jpg`
  images[1]=`https://previews.123rf.com/images/geenday20/geenday201803/geenday20180300002/96611620-online-shopping-discount-concept-desktop-with-laptop-tablet-and-mobile-phone-shop-now-button-on-gree.jpg`
  images[2]=`https://zakelijkesoftware.com/wp-content/uploads/2016/06/kosten-webshop.jpg`;
  
  function changeImg(params) {
      document.slide.src=images[i];
      if(i<images.length-1){
  i++;
      }
      else{
          i=0;
      }
      setTimeout(`changeImg()`,time)
  }
  window.onload=changeImg;
  
  // Barcha productlarni saqlovchi array
  let productArray = JSON.parse(localStorage.getItem('productlar'))|| [
    new Product("Iphone 13 Pro", "texnika", 1300, "yangi", ""),
    new Product("Refrigerator", "texnika", 800, "yangi", ""),
    new Product("Hoodie", "kiyim", 100, "eski", ""),
    new Product("Planshet", "texnika", 1100, "eski", ""),
    new Product("House", "uyJoy", 130000, "eski", "")
    
  ];
 
  
  const mainDiv = document.querySelector(".main");
  
  
  ekrangaChiqarish(productArray);
  
  function ekrangaChiqarish(arrayParam) {
    mainDiv.innerHTML = "";
    arrayParam.forEach((product, index, array) => {
      mainDiv.innerHTML += `<div class="card-product">
        <div class="card-images">
        <img src="${product.surat}" alt="...">
        </div>
        <div class="card-content">
          <h3 class="card-title">${product.nom}</h3>
          <h4 class="card-title">Turi: ${product.kategoriya}</h4>
          <h4 class="card-title">Holat: ${product.holat}</h4>
          <h4 class="card-title">Narx: ${product.narx}$</h4>
        <p class="card-title">${new Date (product.vaqt).toLocaleString()}</p>
     <button class="button" onclick="korzinkagaQoshish(${index})">Xarid qilish</button>
     <i id="heart" onclick="myHeart()" class="bi bi-suit-heart" style="color:red;margin-left:12px;cursor:pointer; font-size:1.5rem"></i>
     </div>
      </div>`;
    });
  }
  
  // Optimal filterlash va saralash funksiyasi
  function filterProducts() {
    let tanlanganHolat = document.getElementById('filterHolat').value;
    let tanlanganKategoriya = document.getElementById("filterKategoriya").value;
    let saralanganArray = [];
    if (tanlanganHolat !== "barchasi" && tanlanganKategoriya !== "barchasi") {
      saralanganArray = productArray.filter((product) => {
        return (
          product.holat === tanlanganHolat &&
          product.kategoriya === tanlanganKategoriya
        );
      });
    } else if (tanlanganKategoriya !== "barchasi") {
      saralanganArray = productArray.filter((product) => {
        return product.kategoriya === tanlanganKategoriya;
      });
    } else if (tanlanganHolat !== "barchasi") {
      saralanganArray = productArray.filter((product) => {
        return product.holat === tanlanganHolat;
      });
    } else {
      saralanganArray = productArray;
    }
  
    // Saralangan arrayni ekranga chiqarish
    ekrangaChiqarish(saralanganArray);
  }
   
  
  /*** Mahsulotlarni narxi  bo'yicha saralash */
  
  function sortProduct() {
    let narxSort = document.getElementById("sortNarx").value;
    productArray.sort((productA, productB) => {
      return narxSort === "arzon"
        ? productA.narx - productB.narx
        : productB.narx - productA.narx;
    });
  
    ekrangaChiqarish(productArray);
  }
  
  /*** Mahsulotlarni kategoriyasi  bo'yicha saralash */
  function kategoriyaSort() {
    let tanlanganKategoriya = document.getElementById("kategoriyaTanlash").value;
    const saralanganArray2 = productArray.filter((product) => {
      return product.kategoriya === tanlanganKategoriya;
    });
    ekrangaChiqarish(saralanganArray2);
  }
  
  const korzinkaArray = [];
  
  function korzinkagaQoshish(index) {
    korzinkaArray.push(productArray[index]);
    document.getElementById('span').innerHTML = korzinkaArray.length;
    localStorage.setItem('korzinkaProduct',JSON.stringify(korzinkaArray))
    // console.log(korzinkaArray)
  }
  
  
  function nomBoyichaSaralash() {
    const matn = document.getElementById('search').value
    const matnRegex = new RegExp(matn, 'gi')
    const filter = productArray.filter((product) => {
      return matnRegex.test(product.nom)
    })
    ekrangaChiqarish(filter);
  };
  
  function vaqtBoyichaTartiblash() {
    productArray.sort((productA, productB) => {
        return productB.vaqt - productA.vaqt;
    });
  
    ekrangaChiqarish(productArray);
  }
  