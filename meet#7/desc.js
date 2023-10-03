let buah = ["manngo", "banana", "watamelon", "bornana", "mamud"];

let [, , wata, ...more] = buah;
console.log(wata, ...more);

let data = {
    nama:"mamud",
    sudahMenikah:false
};

let {nama: namanya, sudahMenikah: isMenikah} = data;
console.log(namanya, isMenikah);