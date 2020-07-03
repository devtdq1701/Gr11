document.addEventListener("DOMContentLoaded", function (event) {
  let minusOne = document.getElementById("minusOne");
  let quantityOne = document.getElementById("quantityOne");
  let quantityOneInt = parseInt(quantityOne.value);
  let priceOne = document.getElementById("priceOne");
  let priceTwo = document.getElementById("priceTwo");
  let minusTwo = document.getElementById("minusTwo");
  let quantityTwo = document.getElementById("quantityTwo");
  let quantityTwoInt = parseInt(quantityTwo.value);
  let addTwo = document.getElementById("addTwo");
  let checkboxAll = document.getElementsByClassName("checkbox-all");
  let checkbox = document.getElementsByClassName("checkbox-input");
  let checkboxProduct = document.getElementsByClassName(
    "checkbox-input-product"
  );
  let priceValue = document.getElementById("priceValue");
  let priceO = getPrice(quantityOneInt, 545);
  let priceT = getPrice(quantityTwoInt, 779);
  let priceA = 0;
  function loadTotalPrice() {
    let totalQuantity = quantityOneInt + quantityTwoInt;
    let totalQuantityStr = totalQuantity.toString();
    let totalPrice = document.getElementsByClassName("totalPrice");
    for (let i = 0; i < totalPrice.length; i++) {
      totalPrice[i].innerHTML = totalQuantityStr;
    }
  }

  function getPrice(x, a) {
    return x * a;
  }

  function priceToString(price) {
    let priceStr = price.toString();
    if (price >= 1000) {
      let priceStrLeft = priceStr.slice(0, 1);
      let priceStrRight = priceStr.slice(1);
      priceStr = priceStrLeft + "." + priceStrRight;
    }
    let Str;
    if (price > 0) {
      Str = "₫" + priceStr + ".000";
    } else {
      Str = "₫" + priceStr;
    }
    return Str;
  }

  function addDot(x, a) {
    let price = a * x;
    let priceStr = priceToString(price);
    return priceStr;
  }

  function updatePriceAll() {
    for (let i = 0; i < checkboxAll.length; i++) {
      checkboxAll[i].onclick = function () {
        if (checkboxAll[i].checked) {
          for (let j = 0; j < checkbox.length; j++) {
            checkbox[j].checked = true;
          }
          priceA = priceO + priceT;
        } else {
          for (let j = 0; j < checkbox.length; j++) {
            checkbox[j].checked = false;
          }
          priceA = 0;
        }

        priceValue.innerHTML = priceToString(priceA);
      };
    }
  }

  function checkForAll() {
    for (let i = 0; i < checkboxProduct.length; i++) {
      checkboxProduct[i].onclick = function () {
        let count = 0;
        for (let item of checkboxProduct) {
          if (item.checked == true) count++;
        }
        if (count == checkboxProduct.length) {
          for (let item of checkboxAll) {
            item.checked = true;
          }
          priceA = priceO + priceT;
          priceValue.innerHTML = priceToString(priceA);
        } else {
          for (let item of checkboxAll) {
            item.checked = false;
          }
        }
      };
    }
  }

  let singleCheckBoxes = document.getElementsByName("singleCheckbox");

  function singleCheck() {
    singleCheckBoxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => {
        if (!e.target.checked) {
          e.target.value === "One" ? (priceA = priceO) : (priceA = priceT);
        } else if (e.target.checked) {
          e.target.value === "One" ? (priceA = priceO) : (priceA = priceT);
        }
        priceValue.innerHTML = priceToString(priceA);
      });
    });
  }

  function updatePrice() {
    for (let i = 0; i < checkboxAll.length; i++) {
      if (checkboxAll[i].checked) {
        priceA = priceO + priceT;
        priceValue.innerHTML = priceToString(priceA);
      }
      else {
        singleCheck();
      }
    }
  }

  updatePriceAll();
  checkForAll();
  singleCheck();
  loadTotalPrice();
  minusOne.addEventListener("click", function () {
    if (quantityOneInt <= 4 && quantityOneInt > 0) {
      quantityOneInt--;
      quantityOne.value = quantityOneInt.toString();

      priceOne.innerHTML = addDot(545, quantityOneInt);
    } else {
      alert("Bạn không thể nhập số lượng nhỏ hơn 0!");
    }
    priceO = getPrice(quantityOneInt, 545);
    priceT = getPrice(quantityTwoInt, 779);
    singleCheck();
    loadTotalPrice();
    updatePrice();
  });
  let addOne = document.getElementById("addOne");
  addOne.addEventListener("click", function () {
    if (quantityOneInt < 4 && quantityOneInt >= 0) {
      quantityOneInt++;
      quantityOne.value = quantityOneInt.toString();
      priceOne.innerHTML = addDot(545, quantityOneInt);
    } else {
      alert("Kho hàng sản phẩm không đủ!");
    }
    priceO = getPrice(quantityOneInt, 545);
    priceT = getPrice(quantityTwoInt, 779);
    loadTotalPrice();
    updatePrice();
  });
  minusTwo.addEventListener("click", function () {
    if (quantityTwoInt <= 4 && quantityTwoInt > 0) {
      quantityTwoInt--;
      quantityTwo.value = quantityTwoInt.toString();
      priceTwo.innerHTML = addDot(779, quantityTwoInt);
    } else {
      alert("Bạn không thể nhập số lượng nhỏ hơn 0!");
    }
    priceO = getPrice(quantityOneInt, 545);
    priceT = getPrice(quantityTwoInt, 779);
    loadTotalPrice();
    updatePrice();
  });
  addTwo.addEventListener("click", function () {
    if (quantityTwoInt < 4 && quantityTwoInt >= 0) {
      quantityTwoInt++;
      quantityTwo.value = quantityTwoInt.toString();
      priceTwo.innerHTML = addDot(779, quantityTwoInt);
    } else {
      alert("Kho hàng sản phẩm không đủ!");
    }
    priceO = getPrice(quantityOneInt, 545);
    priceT = getPrice(quantityTwoInt, 779);
    loadTotalPrice();
    updatePrice();
  });
});
