let horia=document.querySelector('.horia')
let horib=document.querySelector('.horib')
let horic=document.querySelector('.horic')
let horid=document.querySelector('.horid')
let horie=document.querySelector('.horie')
let horif=document.querySelector('.horif')
let dropdowna=document.querySelector('.dropdowna')
let dropdownb=document.querySelector('.dropdownb')
let dropdownc=document.querySelector('.dropdownc')
let dropdownd=document.querySelector('.dropdownd')
let dropdowne=document.querySelector('.dropdowne')
let dropdownf=document.querySelector('.dropdownf')
let bottom = document.querySelector('.bottom');
let dropdown = document.querySelector('.dropdown');
let bt = document.querySelector('.bt');
document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && e.target !== bt ) {
        console.log("entering")
        dropdown.classList.add('rhide');
        dropdown.classList.remove('hide');
    }
});

bottom.addEventListener('click', () => {
    dropdown.classList.add('hide');
    dropdown.classList.remove('rhide');
});
document.addEventListener('click', e => {
    if (!dropdowna.contains(e.target) && e.target !== horia ) {
        console.log("entering")
        dropdowna.classList.add('rhide');
        dropdowna.classList.remove('hide');
    }
});

horia.addEventListener('click', () => {
    dropdowna.classList.add('hide');
    dropdowna.classList.remove('rhide');
});
document.addEventListener('click', e => {
    if (!dropdownb.contains(e.target) && e.target !== horib ) {
        console.log("entering")
        dropdownb.classList.add('rhide');
        dropdownb.classList.remove('hide');
    }
});

horib.addEventListener('click', () => {
    dropdownb.classList.add('hide');
    dropdownb.classList.remove('rhide');
});
document.addEventListener('click', e => {
    if (!dropdownc.contains(e.target) && e.target !== horic ) {
        console.log("entering")
        dropdownc.classList.add('rhide');
        dropdownc.classList.remove('hide');
    }
});

horic.addEventListener('click', () => {
    dropdownc.classList.add('hide');
    dropdownc.classList.remove('rhide');
});
document.addEventListener('click', e => {
    if (!dropdownd.contains(e.target) && e.target !== horid ) {
        console.log("entering")
        dropdownd.classList.add('rhide');
        dropdownd.classList.remove('hide');
    }
});

horid.addEventListener('click', () => {
    dropdownd.classList.add('hide');
    dropdownd.classList.remove('rhide');
});
document.addEventListener('click', e => {
    if (!dropdowne.contains(e.target) && e.target !== horie ) {
        console.log("entering")
        dropdowne.classList.add('rhide');
        dropdowne.classList.remove('hide');
    }
});

horie.addEventListener('click', () => {
    dropdowne.classList.add('hide');
    dropdowne.classList.remove('rhide');
});
document.addEventListener('click', e => {
    if (!dropdownf.contains(e.target) && e.target !== horif ) {
        console.log("entering")
        dropdownf.classList.add('rhide');
        dropdownf.classList.remove('hide');
    }
});

horif.addEventListener('click', () => {
    dropdownf.classList.add('hide');
    dropdownf.classList.remove('rhide');
});
