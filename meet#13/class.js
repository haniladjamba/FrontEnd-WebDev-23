// //object literal
// const mobil = {
//     // prop : value
//     jumlahRoda : 4,
//     warna : "merah",
//     // methodName : function(){...};
//     nyalakan: function() {
//         console.log("start",$(this.warna("merah")));
//     }
// };

class Mobil {
    constructor(transmisi, roda, mesin){
        this.tansmisi = transmisi;
        this.roda = roda;
        this.mesin = mesin;
    };

    nyalakanMesin() {
        console.log(`mobil ${this.transmisi} dinyalakan`);
    }
}

const mobil = new Mobil("manual", 4, "v-8");
const mobil2 = new Mobil("auto", 3, "n-2")
console.log(mobil, mobil2);
mobil.nyalakanMesin();

//inherit
class Toyota extends Mobil {
    constructor(type, warna, tansmisi, roda, mesin) {
        super(tansmisi, roda, mesin); //assigning parent props
        this.type = type;
        this.warna = warna;
    }
}

const toyota = new Toyota("4WD", "solid black", "manual", 4, "v-8");
console.log(toyota);
toyota.nyalakanMesin();
