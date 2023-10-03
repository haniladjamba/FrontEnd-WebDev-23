const jumlah = (...c) =>{
    const arr = [c];
    let total = 0;
    c.forEach(element => {
        total = total + element;
    });
    console.log(total);
}

jumlah(1,2,3,3);

function subs(a,b,...c) {
    const lis = [a,b]
    let hasilC = 0;
    c.forEach(item => {
        hasilC -= item; 
    });
    let final = 0;
    lis.forEach(item => {
        final -= item;
    });
    return final;
}

const isi = subs(1,2,3,4,5);
console.log(isi);