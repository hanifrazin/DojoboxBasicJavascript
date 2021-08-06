function cekBarang(namaBarang){
    var ketemu = 0;
    for(var i=0;i<elektronik.length;i++){
        if(elektronik[i] === namaBarang){
            ketemu = 1;
            break;
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

function detailBarang(){
    var jml_barang = parseInt(prompt('Masukkan jumlah barang : '));
    var hrg_barang = parseInt(prompt('Masukkan harga barang : '));
    var diskon = parseInt(prompt('Masukkan diskon : ','[0-100]'));
    var hrgDiskon = hrg_barang - hitungDiskon(hrg_barang,diskon);

    document.write('Nama Barang : '+nama_barang+'<br>');
    document.write('Harga : Rp. '+hrg_barang+'<br>');
    document.write('Jumlah : '+jml_barang+'<br>');
    document.write('Discount '+diskon+'% : '+hrgDiskon+'<br>');
    document.write('Total : Rp. '+hitungTotal(hrgDiskon,jml_barang)+'<br>');
}

var elektronik = ['AC','Kulkas','TV','Radio','Laptop'];

var nama_barang = prompt('Masukkan nama barang : ','[AC,Kulkas,TV,Radio,Laptop]');



var cek = cekBarang(nama_barang);
// document.write(cek);

if(cek === 1){
    detailBarang();
}else{
    document.write('Maaf barang yang anda cari tidak tersedia');
}

// cara kedua
// switch(nama_barang){
//     case 'AC':
//     case 'Kulkas':
//     case 'TV':
//     case 'Radio':
//     case 'Laptop':
//         detailBarang();
//         break;
//     default:
//         document.write('Maaf barang yang anda cari tidak tersedia');
// }



