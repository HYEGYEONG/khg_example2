let product;
let price;

function goMart(){
  console.log("마트에 가서 어떤 음료를 살지 고민한다..");
  return 10;
}

function pickDrink(){
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      console.log("고민 끝!!!");
      product="제로콜라";
      price = 2000;
      resolve();
      //reject();
    }, 3000);
  });
}

function pay(){
  console.log(`상품명 :  ${product}, 가격: ${price}`);
}

function nopay(){
  console.log("금액부족");
}

async function exec(){
  //console.log(goMart());
  try
  {
    const temp= goMart();
    console.log(temp);
    await pickDrink().then(()=>pay());
  }
  catch(error)
  {
      nopay();
  }

}

exec();