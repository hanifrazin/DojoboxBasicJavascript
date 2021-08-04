var a = 8;
var b = 4;

function volume(sisi){
    return sisi**3;
}
var volumeA = volume(a);
var volumeB = volume(b)
document.write('Volume A dengan panjang sisi '+ a + ' : '+volumeA+'<br>');
document.write('Volume B dengan panjang sisi '+ b + ' : '+volumeB+'<br>');
document.write('Total Volume A dan Volume B '+ (volumeA + volumeB) +'<br>');