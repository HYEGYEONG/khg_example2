/* async function f1(){
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

console.log("1 >> ", f1());

f1().then(function (result){
  console.log("2 >> ", result); //1
});

console.log("3 >> ", f2());

f2().then(function (result){
  console.log("4 >> ",result);//1
});

const f3=async() => {
  return 3;
} */

 

function fetchFruits(){
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      const fruits = ["사과","레몬","수박"];
      //resolve(fruits);
      reject(new Error('알수 없는 에러 발생!! 아이템을 가졀올 수 없음!!'));
    },1000);
  });
}

  async function printItems(){
    try{
      const fruits = await fetchFruits();
      console.log(fruits);
    }catch(error){
      console.log(error);
    }
  }
  printItems();
  /* fetchFruits()
  .then(function (f){
    console.log(f) ;
    f.forEach((fruit) => {
      console.log(fruit);
      temp.push(fruit);
      console.log(temp);
    });
  })
  .then(console.log(temp))
  .catch(function (error){
    console.log(error);
  }); */