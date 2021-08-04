/* var $main = 'test';
var _main = 1234;
// document.write(typeof(_main));


var nama = prompt("Silahkan masukkan nama","Dojobox Fans");
document.write(`Hai ${nama}, welcome in dojobox <br>`);

var konfirmasi = confirm("Masih ingin disini?");
var hasil = (konfirmasi === true) ? "Iya" : "Gak";
document.write(`${hasil} <br>`); */

/* var nama = "hanif";

if (nama === 'hanif') {
    document.write("seorang professional QA");
}
else{
    document.write('Seorang junior programmer');
} */

/* var bilangan = parseInt(prompt("Masukkan angka : "));

if(bilangan % 2 === 0){
    document.write(`${bilangan} merupakan Bilangan genap <br>`);
}else if(bilangan % 2 == 1){
    document.write(`${bilangan} merupakan Bilangan ganjil <br>`);
}else{
    document.write(`${bilangan} bukan bilangan ganjil atau genap`);
} */

/* var nilai_kepuasan = parseInt(prompt("Masukkan nilai kepuasan anda?","0-5"));
switch(nilai_kepuasan){
    case 0:
        document.write('Saya sangat kecewa');
        break;
    case 1:
        document.write('saya kcewa');
        break;
    case 2:
        document.write('saya tidak puas');
        break;
    case 3:
        document.write('saya puas');
        break;
    case 4:
        document.write('saya sangat puas');
        break;
    case 5:
        document.write('saya terkesan');
        break;
    default:
        document.write('Biasa aja');
} */

/* var nilai_ujian = parseInt(prompt("Masukkan nilai kepuasan anda?","0-100"));
switch(true){
    case (nilai_ujian >= 90):
        document.write('Grade A');
        break;
    case (nilai_ujian >= 80):
        document.write('Grade B');
        break;
    case (nilai_ujian >= 70):
        document.write('Grade C');
        break;
    case (nilai_ujian >= 60):
        document.write('Grade D');
        break;
    default:
        document.write('Input salah');
} */

/* var namaVariable
let namaVariableMenggunakanLet
const phi = 3.14
const percepatanGrafitasi = 10; */

/* var angka = 20;
if(angka % 2 === 0){
    document.write(angka + " merupakan bilangan genap");
}else if(angka % 2 === 1){
    document.write(angka + " merupakan bilangan ganjil");
}else{
    document.write(angka + " bukan merupakan bilangan genap atau ganjil");
} */

/* var ulang = 1;

while(ulang <= 10){
    document.write('halo dojobers <br>');
    ulang += 1;
} */

/* for(var iterator = 1; iterator<=10; iterator++){
    document.write('hai Dojobers.... !!! <br>');
} */

/* var vista = 1;
while(vista <= 5){
    document.write('siswa dengan nomor induk '+vista+' adalah member TA Vista <br>');
    vista += 1;
}

for(var intan = 6; intan <= 10; intan++){
    document.write('siswa dengan nomor induk '+intan+' adalah member TA Intan <br>');
} */

//Array

//deklarasi array
/* var buah = [];

//isi array
buah = ['apel','belimbing','cempedak','duku','salak','pisang'];

document.write(typeof(buah) + '<br>');
document.write(buah);
document.write('<br>');
document.write(buah.length);
document.write('<br>');
document.write(buah[4]);
document.write('<br>');

var iniAdalahFungsi = function(){
    alert('hai dojobers');
}

var myArr = ['teks',1234,true,iniAdalahFungsi,[2,3,4]];
document.write('<br>');
document.write(myArr[4][1]);
 */
/**
 * kalau ngelompatin index di array, 
 * maka secara otomatis akan dibuatkan array yang 
 * dilompatin tp dalam keadaan empty (tidak ada nilainya atau kosong)
 */ 
/* var myArr2 = [];
myArr2[0] = 'senin';
myArr2[1] = 'selasa';
//myArr[2] = empty;
myArr2[3] = 'kamis'; */

// hapus array secara manual
// myArr2[3] = undefined;

/**
 * menampilkan variable menjadi lebih rapi
 */
 var buah = [];
 buah = ['apel','belimbing','cempedak','duku','salak','pisang'];
 
 // 1. Join
 // document.write(buah);
 // document.write(buah.join('<br>'));
 
 // 2. push dan pop
 // bekerja di akhir element atau element bagian akhir
 // push : menambahkan element di akhir 
 buah.push('melon','duren');
 // document.write(buah.join('<br>'));
 // document.write('<br>');
 // // pop : menghapus element terakhir
 buah.pop('duren');
 // document.write(buah.join('<br>'));
 
 // 3. unshift dan shift
 // unshift digunakan untuk menambahkan array di awal element
 buah.unshift('semangka');
 // document.write(buah.join('<br>'));
 
 // shif digunakan untuk mehilangkan atau menghapus element array di awal
 buah.shift('semangka');
 // document.write(buah.join('<br>'));
 
 // 4. splice
 // splice digunakan untuk menyisipkan array di tengah2
 // splice(index_awal, jml_hapus, element_baru_1, ..., element_baru_ke_n)
 buah.splice(2,2,'stroberi','anggur');
 document.write(buah.join('<br>'));
 document.write('<br><br>');
 
 // 5. slice
 // slice digunakan untuk memotong array dan disimpan ke variabel baru
 // slice(index_awal, index_akhir_yang_tidak_diikutkan)
 var newBuah = buah.slice(1,3);
 // document.write(newBuah.join('<br>'));
 
 // 6. for each and map
 // foreach : tidak mengembalikan array
 buah.forEach(function(e,i){
     document.write(i + ' = ' + e + '<br>');
 });
 
 document.write('<br><br>');
 
 buah.forEach(function(e,i){
     document.write((i+1) + ' . ' + e + '<br>');
 });
 document.write('<br><br>');
 //map => mengembalikan array atau return array
 var buahBaru = buah.map(function(e,i){
     return e + ' enak dimakan';
 });
 document.write(buahBaru.join('<br>'));