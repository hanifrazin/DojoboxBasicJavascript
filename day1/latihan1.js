// alert('selamat datang di kelas ini');
// var nama = prompt('masukkan nama anda : ');
// document.write('Selamat datang ' + nama + '<br>');
// document.write('Silahkan belajar dengan penuh semangat');

/* var bil1 = parseInt(prompt('masukkan bilangan 1 : '));
var bil2 = parseInt(prompt('masukkan bilangan 2 : '));
document.write('hasil penjumalahan kedua bilangan adalah ' + (bil1+bil2) + '<br>'); */

// var bil1 = 10;
// var bil2 = 20;

// document.write((bil1 < bil2) + '<br>');
// document.write((bil1 > bil2) + '<br>');

// var konfirmasi = confirm('Do you really want to close?');
// document.write((konfirmasi ? 'OK' : 'CANCEL') + '<br>');

// var bil1 = parseInt(prompt('Masukkan bilangan ke-1 : ','3'));
// var bil2 = parseInt(prompt('Masukkan bilangan ke-2 : ','5'));
// document.write(`${bil1 + bil2} <br>`);

const jml_matkul = 3;
let nama = prompt('Masukkan nama mahasiswa');
let nilai1 = parseInt(prompt('Masukkan nilai matkul ke-1')); 
document.write('Nilai matkul ke-1 : '+nilai1+'<br>');
let nilai2 = parseInt(prompt('Masukkan nilai matkul ke-2'));
document.write('Nilai matkul ke-2 : '+nilai1+'<br>');
let nilai3 = parseInt(prompt('Masukkan nilai matkul ke-3'));
document.write('Nilai matkul ke-3 : '+nilai1+'<br>');
let rata2 = (nilai1+nilai2+nilai3)/jml_matkul;
document.write('Rata-Rata Nilai : '+nilai1+'<br>');
let result =  ((rata2 >= 60) && (rata2 <= 100)) ? 'Lulus' : 'Gagal';
document.write('Hasil akhir ujian adalah '+result+'<br>');