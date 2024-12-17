//task 1

function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve("resolved"), ms);
    });
  }

  

//   console.log('Start');

//   delay(2000).then((msg) => {
//     console.log(`${msg} after 2 second`);
//   });
  
//   console.log('End');



//task 2
function fetchData() {
return new Promise((resolve) => {
    setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Fetched data:", randomNumber);
    resolve(randomNumber);
    }, 2000);
});
}


//   console.log("Fetching data...");

//   fetchData().then((data) => {
//     console.log("Data fetched:", data);
//   });



//task 3
function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedData = data * 2;
        console.log("Processed data:", processedData);
        resolve(processedData);
      }, 1000);
    });
  }

//   console.log("Processing data ....")

//   processData(1).then((data)=>{
//     console.log(`processed data ${data}`)
//   });



// task 4
console.log("Start");

fetchData()
  .then((data) => processData(data))
  .then((result) => {
    console.log("Final result:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

console.log("End");


