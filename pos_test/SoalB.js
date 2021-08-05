var elektronik = ['AC','Kulkas','TV','Radio','Laptop'];

var nama_barang = prompt('Masukkan nama barang : ','[AC,Kulkas,TV,Radio,Laptop]');
console.log(nama_barang);

var jml_barang = parseInt(prompt('Masukkan jumlah barang : '));
var hrg_barang = parseInt(prompt('Masukkan harga barang : '));
var diskon = parseInt(prompt('Masukkan diskon : ','[0-100]'));

function cekBarang(namaBarang){
    var ketemu = 0;
    for(var i=0;i<elektronik.length;i++){
        if(elektronik[i] === namaBarang){
            ketemu = 1;
        }else{
            ketemu = 0;
        }
    }
    return ketemu;
}

function hitungDiskon(diskon,harga){
    return (harga * diskon) /100;
}

function hitungTotal(hargaSetelahDiskon,jumlahBrg){
    return hargaSetelahDiskon * jumlahBrg;
}


var cek = cekBarang(nama_barang);
console.log(cek);
if(cek === 1){
    var hrgDiskon = hitungDiskon(hrg_barang,diskon);
    document.write('Nama Barang : '+nama_barang+'<br>');
    document.write('Harga : Rp. '+hrg_barang+'<br>');
    document.write('Jumlah : '+jml_barang+'<br>');
    document.write('Discount '+diskon+'% : '+hrgDiskon+'<br>');
    document.write('Total : '+hitungTotal(hrgDiskon,jml_barang)+'<br>');
}else{
    document.write('Maaf barang yang anda cari tidak tersedia');
}


