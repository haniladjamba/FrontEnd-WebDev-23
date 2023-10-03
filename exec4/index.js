// nama : Ladjamba, Hani Jastin Giovanni
// subjek : Front-End Web Developtment
// Date : 20 - Sept - 2023

// import statement
import helloWorld from './helloWorld.js';
import ambilDataUser from './ambilDataUser.js';
import ambilDataUserAsnyc from './ambilDataUserAsnyc.js';

const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
}

// memanggil fungsi dari modul berbeda (helloWorld.js, ambilDataUser.js, ambilDataUserAsnyc.js)
messages();
ambilDataUser();
ambilDataUserAsnyc();
