// setTimeout(() => {
//     console.log("installed 100%");
// }, 3000);
// console.log("download 1/3");
// console.log("download 2/3");
// console.log("download 3/3");

//callback
// function proses1() {
//   console.log("proses 1 selesai dijalankan");
// };

// function proses2(callback1,callback2) {
//   setTimeout(function () {
//     callback1();
//     console.log("proses 2 selesai dijalankan");
//     callback2();
//   }, 2000);
// };

// function proses3() {
//   console.log("proses 3 selesai dijalankan");
// };

// function proses25() {
//     console.log("proses2.5 selesai dijalankan")
// };

// proses1();
// proses2(proses25,proses3);

const condition = true;

let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject("Gagal");
  }
});

newPromise
  .then((result) => {
    console.log(result); // Output: Berhasil
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"
    ); // Output: Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected
  });
