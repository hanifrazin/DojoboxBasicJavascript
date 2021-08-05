// Soal A
rak = [];

var buku = prompt('Masukkan judul buku ? ');

while(buku.length !== 0){
    tambah_buku(buku)
    prompt('Masukkan judul buku ? ');
}

function tambah_buku(judul_buku){
    rak.push(judul_buku);
}
document.write(rak);

function pinjam_buku(letak_buku){
    rak[letak_buku] = undefined;
}

function kembalikan_buku(balikin){
    for(var i=1;i<=5;i++){
        if(rak[i] == undefined){
            break;
        }
    }

    rak[i] = balikin;
}