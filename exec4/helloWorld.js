// nama : Ladjamba, Hani Jastin Giovanni
// subjek : Front-End Web Developtment
// Date : 20 - Sept - 2023

const helloWorld = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);  // string "Hello World" akan muncul dalam dua detik
    });
  };

export default helloWorld;