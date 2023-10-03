//1 o
let person = {
    nama: "resma",
    usia: 19,
    pekerjaan: "belum ada",
    alamat: "airmadidi",
    kampus: "unklab\n"
  };
  
  // Mendeklarasikan variabel-variabel dengan let dan menggunakan destructuring
let { nama, usia, pekerjaan, alamat, kampus } = person;
  
console.log(nama); 
console.log(usia);      
console.log(pekerjaan);  
console.log(alamat);
console.log(kampus);


//2 objek: ambil sebagian objek
let mobil = {
    namaMobil: "BMW",
    produksi: "jerman",
    tahunRilis: 1916,
    penemu: "karl rapp",
    jumlahProdukSaatIni: 1481253
  };
  
// Mendeklarasikan variabel-variabel dengan let dan menggunakan destructuring
let { namaMobil: carName, produksi: productionDate, penemu: founder} = mobil;
// Mengambil sebagian item dari object  
console.log(carName);
console.log(productionDate);
console.log(founder);

// 3 objek: pakai nilai default
function film(namaFilm= "Nama film", rating="Rating N/A", rilis= "Tahun rilis N/A", pendapatan= "Pendapatan N/A") {
    console.log(namaFilm);
    console.log(rating);
    console.log(rilis);
    console.log(pendapatan);
  }
  
// Memanggil fungsi dengan satu argumen
console.log(" ");
film("Openheimer");
  
//4 objek rest operator
function carList(nama1,nama2,nama3,...nama4){
    console.log(nama1,nama2,nama3,nama4);
};
console.log(" ");
carList("lambo", "posche", "bugati", "rolls royce", "mclaren", "ferarri", )