/* var a = 8;
var b = 4;

function volume(sisi){
    return sisi**3;
}
var volumeA = volume(a);
var volumeB = volume(b)
document.write('Volume A dengan panjang sisi '+ a + ' : '+volumeA+'<br>');
document.write('Volume B dengan panjang sisi '+ b + ' : '+volumeB+'<br>');
document.write('Total Volume A dan Volume B '+ (volumeA + volumeB) +'<br>');
 */

/** 
 * a,b adalah parameter
*/

// function tambah(a,b){
//     return a + b;
// }

// var penjumlahan = function(angka1,angka2){
//     var hasil;
//     hasil = angka1 + angka2;
//     return hasil;
// };

// var jumlah = function(a,b){
//     console.log(a+b);
// }

// jumlah(5,5);

// function halo(a){
//     return 'halo, '+a;
// }

// document.write(tambah(5,3)+'<br>');
// document.write(tambah(4,4)+'<br>');
// document.write(tambah(10,4)+'<br>');

/**
 * apabila argumen < parameter, maka argumen yang ada nilainya akan jadi undefined
 * apabila argumen > parameter, maka argumen yang kelebihan akan di ignore oleh JS
 */
// document.write(halo()+'<br>');
// document.write(tambah(4,5,6,7)+'<br>');
// document.write(penjumlahan(4,5)+'<br>');

/**
 * Perbedaan fungsi dan prosedur, fungsi pny return value sedangkan prosedur tidak
 * Persamaan fungsi dan prosedur, dapat dipanggil berulang kali.
 */

/* function cetak(bill1,bill2){
    document.write('Tagihan pertama sebesar : Rp '+bill1+'<br>');
    document.write('Tagihan kedua sebesar : Rp '+bill2+'<br>');
}

cetak(100000,200000);

var penjumalahan = function(bilangan1,bilangan2){
    document.write(bilangan1 + bilangan2);
}

penjumalahan(1,2); */

// declaration literal
var akademiaku = {
    //property
    nama : 'Hanif Razin Rahmatullah',
    NIK : '13211434253',
    email : 'hanif@nds.co.id',

    //method
    //this untuk mengakses property di dalam object
    getName : function(){
        console.log('Nama saya adalah ' + this.nama + '<br>');
    },
    getEmail : function(){
        document.write('email saya adalah ' + this.email + '<br>');
    },
}

document.write(akademiaku.getName());

// constructor
function akademia(nama,nik,email){
    this.nama = nama;
    this.nik = nik;
    this.email = email;
}

var akademia1 = new akademia('Hanif Razin R','3123123','hanif@nds.co.id')
