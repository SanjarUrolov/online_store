const navBurger = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navUl = document.querySelector('.ul');
    const navUlli = document.querySelectorAll('.nav-ul li');
  
    menuBtn.addEventListener('click', () => {
      navUl.classList.toggle('active');
      menuBtn.classList.toggle('toggle');
    });
  };
  navBurger();
  
  
  // /** Product objectning konstructori*/
  function Product(nomParam, kategoriyaParam, narxParam, holatParam, suratParam) {
    this.nom = nomParam;
    this.kategoriya = kategoriyaParam;
    this.narx = narxParam;
    this.holat = holatParam;
    this.surat = suratParam
      ? suratParam
      : "https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo";
    this.vaqt = new Date();
  }
  
  // Barcha productlarni saqlovchi array
  let productArray = JSON.parse(localStorage.getItem('productlar')) || [
    new Product("Iphone 13 Pro", "texnika", 1300, "yangi", ""),
    new Product("Refrigerator", "texnika", 800, "yangi", ""),
    new Product("Hoodie", "kiyim", 100, "eski", ""),
    new Product("House", "uyJoy", 130000, "eski", "")  
  ];

  
  const mainDiv = document.querySelector(".main");
  /**
   * Yangi mahsulot qo'shish
   */
  function mahsulotQoshish() {
    let nom = document.getElementById("nom").value;
    let kategoriya = document.getElementById("kategoriya").value;
    let narx = document.getElementById("narx").value;
    let holat = document.querySelector("[name=holat]:checked").value;
    let surat = document.querySelector("#surat").value;
  
    if (nom && narx) {
      const product = new Product(nom, kategoriya, narx, holat, surat);
      // Yangi hosil bo'lgan mahsulotni arrayga qo'shish
      productArray.push(product);
      localStorage.setItem('productlar', JSON.stringify(productArray))
      ekrangaChiqarish(productArray);
    }
  }
  ekrangaChiqarish(productArray);
  
  function ekrangaChiqarish(arrayParam) {
    mainDiv.innerHTML = "";
    arrayParam.forEach((product, index, array) => {
      mainDiv.innerHTML += `<div class="card-product">
          <div class="card-images">
          <img src="${product.surat}" class="card-img-top" alt="...">
          <div class="card-content">
            <h5 class="card-title">${product.nom}</h5>
            <h6 class="card-title">Turi: ${product.kategoriya}</h6>
            <h6 class="card-title">Holat: ${product.holat}</h6>
            <h6 class="card-title">Narx: ${product.narx}$</h6>
            <h6 class="card-title">Narx: ${new Date(product.vaqt).toLocaleString()}</h6>
       <button class="button" onclick="productArraydanOlibTashlash(${index})">O'chirish</button>
       </div>
       </div>
        </div>`;
    });
  }
  
  //Tanlangan mahsulotni productArraydan olib tashlash
  function productArraydanOlibTashlash(index) {
    productArray.splice(index, 1);
    ekrangaChiqarish(productArray);
    localStorage.setItem('productlar', JSON.stringify(productArray))
    console.log(productArray);
  }
  
  
  
  // Form submit bo'lganda refresh bo'lishini oldini olish
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
  });
  