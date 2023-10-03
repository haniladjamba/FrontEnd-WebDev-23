// Nama-nama kelompok
// Ladjamba, Hani Jastin Giovanni
// Soruday, Quaresma Pergamus
// Batuwael, Hendy Riawan
// Walangitan, Jerrico Caldion Jhenkins
// Makatipu, Natalia Ines Hendrik
// Tumewu, Benedict Jonathan

/* Nomor 1.a Destructing Array */
const makanan = ["Sate", "Nasi Kuning", "Nasi Bambu", "Gorengan", "Malabar"];

let [menu1, menu2, menu3, menu4, menu5] = makanan;
console.log("\nOutput no 1.array");
console.log("menu 1 : " + menu1, "\nmenu 2 : " + menu2, "\nmenu 3 : " + menu3, "\nmenu 4 : " + menu1, "\nmenu 5 : " + menu5);

// Nomor 1.b Desctructing object
console.log("\nOutput no 1.object")
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
  


/* Nomor 2.a Desctructing Array dengan mengambil sebagian item*/
const makananKhas = ["Tinutuan", "Mika Ambon", "Halua Kenari", "Rendang", "Otak-otak", "Sambal Roa", "Lumpia",];

let [khasManado1, , khasManado2, , , khasManado3 ] = makananKhas;
console.log("\nOutput no 2.array")
console.log("Makanan khas manado :\n", "1 : ", khasManado1, "\n 2 : ", khasManado2, "\n 3 : ", khasManado3);

// 2.b Desctructing object
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
console.log(" ");
console.log("Output no 2.object");
console.log(carName);
console.log(productionDate);
console.log(founder);


/* Nomor 3.a Using Default parameter*/
const dataDiri = ["Hani", 20, "Laki-laki", "Ilmu Komputer", "Informatika"];

function dataMhs(nama = "- nama", umur = "- umur", gender = "- gender", jurusan = "- jurusan") {
    return `Nama : ${nama} \nUsia : ${umur}, \nGender : ${gender}, \nJurusan : ${jurusan}`;
}
console.log("\nOutput no 3.array")
console.log(dataMhs(dataDiri[0], dataDiri[1], dataDiri[2]));

// 3.b objek: pakai nilai default
function film(namaFilm= "Nama film", rating="Rating N/A", rilis= "Tahun rilis N/A", pendapatan= "Pendapatan N/A") {
    console.log(namaFilm);
    console.log(rating);
    console.log(rilis);
    console.log(pendapatan);
  }
  
// Memanggil fungsi dengan satu argumen
console.log(" ");
console.log("Output no 3.object")
film("Openheimer");

/* Nomor 4.a Using Rest operator*/
const kendaraan = ["Sedan", "Porsche", "Cherry Metallic", "Hong-kong", "Taiwan", "Singapore"];

const dataEksp = (jenisKendaraan, namaKendaraan, warna, ...tujuan) => {
    console.log("Daftar Export Kendaraan Roda Empat");
    console.log(" Jenis         : ", jenisKendaraan);
    console.log(" Nama          : ", namaKendaraan);
    console.log(" Warna         : ", warna);
    console.log(" Daftar Tujuan : ", tujuan);
}
console.log("\nOutput no 4.array")
dataEksp(kendaraan[0], kendaraan[1], kendaraan[2], kendaraan[3], kendaraan[4], kendaraan[5]);

// 4.b objek rest operator
function carList(nama1,nama2,nama3,...nama4){
    console.log(nama1,nama2,nama3,nama4);
};
console.log(" ");
console.log("Output no 4.object")
carList("lambo", "posche", "bugati", "rolls royce", "mclaren", "ferarri", )