// Select Format 
// Mendapatkan semua elemen dengan class 'btn-download' dan 'select-format'
const btnDownloadList = document.querySelectorAll('.btn-download');
const selectFormatList = document.querySelectorAll('.select-format');
const iconDowloadList = document.querySelectorAll('.icon-download');

const dowloandSizePNG = document.querySelectorAll('.size-png');
const dowloandSizeJPG = document.querySelectorAll('.size-jpg');
const dowloandSizeSVG = document.querySelectorAll('.size-svg');

var indexSelectFormat = 0;
let activeDowload = false;

iconDowloadList.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (!activeDowload) { // jika activeDowload tidak false(di gunakan agar tidak terjadi click keluar dua kali)
            selectFormatList[index].style.display = 'block';
            activeDowload = true;
            indexSelectFormat = index;

        }
    });
})

btnDownloadList.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (!activeDowload) {
            selectFormatList[index].style.display = 'block';
            activeDowload = true;
            indexSelectFormat = index;
        }
    });
})


document.addEventListener('click', function (e) {
    if (
        !btnDownloadList[indexSelectFormat].contains(e.target) &&//kecuali var ini dengan index 
        !selectFormatList[indexSelectFormat].contains(e.target) &&
        !iconDowloadList[indexSelectFormat].contains(e.target)
    ) {
        selectFormatList[indexSelectFormat].style.display = 'none';
        activeDowload = false;
    }


});



// Select Format 



// Select change type image
const items = document.querySelectorAll('.picture');
const selectType = document.querySelectorAll('.select-type');
const btnType = document.querySelectorAll('.btn-type');
const iconType = document.querySelectorAll('.icon-type');
const displaySizeFile = document.querySelectorAll('.size-file')
const changeDisplay = document.querySelectorAll('.imageDisplay');

const hiddenPNG = document.querySelectorAll('.png-hidden')
const hiddenJPG = document.querySelectorAll('.jpg-hidden')
const hiddenSVG = document.querySelectorAll('.svg-hidden')





const arrHightLight = [];
for (let i = 0; i < items.length; i++) {
    const selector = `.list-type${i}`;
    const elements = document.querySelectorAll(selector);
    arrHightLight.push(elements);
}

//Ambil element list-download menggunakan for loop 
const arrLinkDownload = [];
for (let i = 0; i < items.length; i++) {
    const selector = `.list-download${i}`;
    const elements = document.querySelectorAll(selector);
    arrLinkDownload.push(elements);
}
// array matriks untuk menyimpan link
const FormatImgPNG = [
    [
        'Image/Aset/PNG/hutao/HUTAO_Default.png',
        'Image/Aset/PNG/hutao/HUTAO_Transparent.png',
        'Image/Aset/PNG/hutao/HUTAO_Green.png',
        'Image/Aset/PNG/hutao/HUTAO_Black.png',
        'Image/Aset/PNG/hutao/HUTAO_White.png'
    ],
    [
        'Image/Aset/PNG/bocchi/Bocchi_Default.png',
        'Image/Aset/PNG/bocchi/Bocchi_Transparent.png',
        'Image/Aset/PNG/bocchi/Bocchi_Green.png',
        'Image/Aset/PNG/bocchi/Bocchi_Black.png',
        'Image/Aset/PNG/bocchi/Bocchi_White.png'
    ],
    [
        'Image/Aset/PNG/ryou/Ryou_Default.png',
        'Image/Aset/PNG/ryou/Ryou_Transparent.png',
        'Image/Aset/PNG/ryou/Ryou_Green.png',
        'Image/Aset/PNG/ryou/Ryou_Black.png',
        'Image/Aset/PNG/ryou/Ryou_White.png'
    ],
    [
        'Image/Aset/PNG/air/Shoes_Logo_Default.png',
        'Image/Aset/PNG/air/Shoes_Logo_Transparent.png',
        'Image/Aset/PNG/air/Shoes_Logo_Green.png',
        'Image/Aset/PNG/air/Shoes_Logo_Black.png'
    ],
    [
        '/Image/Aset/PNG/coffee_1/Coffe_Logo_1_Default.png',
        '/Image/Aset/PNG/coffee_1/Coffe_Logo_1_Transparent.png',
        '/Image/Aset/PNG/coffee_1/Coffe_Logo_1_Green.png',
        '/Image/Aset/PNG/coffee_1/Coffe_Logo_1_Black.png',
        '/Image/Aset/PNG/coffee_1/Coffe_Logo_1_White.png'
    ],
    [
        '/Image/Aset/PNG/coffee_2/Coffe_Logo_2_Default.png',
        '/Image/Aset/PNG/coffee_2/Coffe_Logo_2_Transparent.png',
        '/Image/Aset/PNG/coffee_2/Coffe_Logo_2_Green.png',
        '/Image/Aset/PNG/coffee_2/Coffe_Logo_2_Black.png',
        '/Image/Aset/PNG/coffee_2/Coffe_Logo_2_White.png'
    ],
    [
        '/Image/Aset/PNG/coffee_3/Coffe_Logo_3_Default.png',
        '/Image/Aset/PNG/coffee_3/Coffe_Logo_3_Transparent.png',
        '/Image/Aset/PNG/coffee_3/Coffe_Logo_3_Green.png',
        '/Image/Aset/PNG/coffee_3/Coffe_Logo_3_Black.png',
        '/Image/Aset/PNG/coffee_3/Coffe_Logo_3_White.png'
    ]
];



const FormatImgJPG = [
    [
        'Image/Aset/JPG/hutao/HUTAO_Default.jpg',
        'Image/Aset/JPG/hutao/HUTAO_Green.jpg',
        'Image/Aset/JPG/hutao/HUTAO_Black.jpg',
        'Image/Aset/JPG/hutao/HUTAO_White.jpg'
    ],
    [
        'Image/Aset/JPG/bocchi/Bocchi_Default.jpg',
        'Image/Aset/JPG/bocchi/Bocchi_Green.jpg',
        'Image/Aset/JPG/bocchi/Bocchi_Black.jpg',
        'Image/Aset/JPG/bocchi/Bocchi_White.jpg'
    ],
    [
        'Image/Aset/JPG/ryou/Ryou_Default.jpg',
        'Image/Aset/JPG/ryou/Ryou_Green.jpg',
        'Image/Aset/JPG/ryou/Ryou_Black.jpg',
        'Image/Aset/JPG/ryou/Ryou_White.jpg'
    ],
    [
        'Image/Aset/JPG/air/Shoes_Logo_Default.jpg',
        'Image/Aset/JPG/air/Shoes_Logo_Green.jpg',
        'Image/Aset/JPG/air/Shoes_Logo_Black.jpg'
    ],
    [
        '/Image/Aset/JPG/coffee_1/Coffe_Logo_1_Default.jpg',
        '/Image/Aset/JPG/coffee_1/Coffe_Logo_1_Green.jpg',
        '/Image/Aset/JPG/coffee_1/Coffe_Logo_1_Black.jpg',
        '/Image/Aset/JPG/coffee_1/Coffe_Logo_1_White.jpg'
    ],
    [
        '/Image/Aset/JPG/coffee_2/Coffe_Logo_2_Default.jpg',
        '/Image/Aset/JPG/coffee_2/Coffe_Logo_2_Green.jpg',
        '/Image/Aset/JPG/coffee_2/Coffe_Logo_2_Black.jpg',
        '/Image/Aset/JPG/coffee_2/Coffe_Logo_2_White.jpg'
    ],
    [
        '/Image/Aset/JPG/coffee_3/Coffe_Logo_3_Default.jpg',
        '/Image/Aset/JPG/coffee_3/Coffe_Logo_3_Green.jpg',
        '/Image/Aset/JPG/coffee_3/Coffe_Logo_3_Black.jpg',
        '/Image/Aset/JPG/coffee_3/Coffe_Logo_3_White.jpg'
    ]
];

const FormatImgSVG = [
    [
        'Image/Aset/SVG/hutao/HUTAO_Default.svg',
        'Image/Aset/SVG/hutao/HUTAO_Transparent.svg',
        'Image/Aset/SVG/hutao/HUTAO_Green.svg',
        'Image/Aset/SVG/hutao/HUTAO_Black.svg',
        'Image/Aset/SVG/hutao/HUTAO_White.svg'
    ],
    [
        'Image/Aset/SVG/bocchi/Bocchi_Default.svg',
        'Image/Aset/SVG/bocchi/Bocchi_Transparent.svg',
        'Image/Aset/SVG/bocchi/Bocchi_Green.svg',
        'Image/Aset/SVG/bocchi/Bocchi_Black.svg',
        'Image/Aset/SVG/bocchi/Bocchi_White.svg'
    ],
    [
        'Image/Aset/SVG/ryou/Ryou_Default.svg',
        'Image/Aset/SVG/ryou/Ryou_Transparent.svg',
        'Image/Aset/SVG/ryou/Ryou_Green.svg',
        'Image/Aset/SVG/ryou/Ryou_Black.svg',
        'Image/Aset/SVG/ryou/Ryou_White.svg'
    ],
    [
        'Image/Aset/SVG/air/Shoes_Logo_Default.svg',
        'Image/Aset/SVG/air/Shoes_Logo_Transparent.svg',
        'Image/Aset/SVG/air/Shoes_Logo_Green.svg',
        'Image/Aset/SVG/air/Shoes_Logo_Black.svg'
    ],
    [
        '/Image/Aset/SVG/coffee_1/Coffe_Logo_1_Default.svg',
        '/Image/Aset/SVG/coffee_1/Coffe_Logo_1_Transparent.svg',
        '/Image/Aset/SVG/coffee_1/Coffe_Logo_1_Green.svg',
        '/Image/Aset/SVG/coffee_1/Coffe_Logo_1_Black.svg',
        '/Image/Aset/SVG/coffee_1/Coffe_Logo_1_White.svg'
    ],
    [
        '/Image/Aset/SVG/coffee_2/Coffe_Logo_2_Default.svg',
        '/Image/Aset/SVG/coffee_2/Coffe_Logo_2_Transparent.svg',
        '/Image/Aset/SVG/coffee_2/Coffe_Logo_2_Green.svg',
        '/Image/Aset/SVG/coffee_2/Coffe_Logo_2_Black.svg',
        '/Image/Aset/SVG/coffee_2/Coffe_Logo_2_White.svg'
    ],
    [
        '/Image/Aset/SVG/coffee_3/Coffe_Logo_3_Default.svg',
        '/Image/Aset/SVG/coffee_3/Coffe_Logo_3_Transparent.svg',
        '/Image/Aset/SVG/coffee_3/Coffe_Logo_3_Green.svg',
        '/Image/Aset/SVG/coffee_3/Coffe_Logo_3_Black.svg',
        '/Image/Aset/SVG/coffee_3/Coffe_Logo_3_White.svg'
    ]
];

// mencari image yang di cari berdasarkan key 
function searchArray(key, array) {
    const bufferKey = array.filter(item => item.includes(key));
    return bufferKey;
}


// Select change type image

var indexSelectType = 0;
let activeType = false;

for (let i = 0; i < items.length; i++) {
    getFileSize(FormatImgPNG[i][0], displaySizeFile[i]);// mengubah size pada element berdasarkan link
}

// Untuk memunculkan dan menutup List type, dan juga melakukan highLight pada li p, serta menganti
// display pada image sesuai dengan li p yang di klik
btnType.forEach(function (activeBtn, index) {

    activeBtn.addEventListener('click', function () {
        // Jika menemukan class "type-active" pada element selecType sesuai element yang di klik maka akan
        // menghilangkan class "type" itu. serta megubah style element untuk menghidden
        for (let i = 0; i < selectType.length; i++) {
            if (selectType[i].classList.contains('type-active')) {
                selectType[i].classList.remove('type-active');
                iconType[i].style.rotate = "0deg";
                indexSelectType = null;
            }
        }
        //Jika tidak dan activeType tidak sama dengan true (untuk mencegah active lebih dari satu listType ) maka akan
        // mengaktifkan listType 
        selectType[index].classList.add('type-active');
        iconType[index].style.rotate = "180deg";
        indexSelectType = index;
        const bufferArrHightLight = []; //deklarasi buffer untuk class
        arrHightLight[index].forEach(function (light, listIndex) {
            bufferArrHightLight.push(light); //array berisi elemen-elemen yang sesuai dengan selektor .list-type
            light.addEventListener('click', function () {
                for (let i = 0; i < bufferArrHightLight.length; i++) {
                    if (bufferArrHightLight[i].classList.contains('hight-light')) {
                        bufferArrHightLight[i].classList.remove('hight-light')
                    }
                }
                light.classList.add('hight-light');
                // Manipulasi display sesuai list yang di kilk
                const valueKey = light.innerHTML;
                const bufferPNG = searchArray(valueKey, FormatImgPNG[index]);
                const bufferJPG = searchArray(valueKey, FormatImgJPG[index]);
                const bufferSVG = searchArray(valueKey, FormatImgSVG[index]);

                if (bufferPNG.length === 0) {
                    // console.log('PNG non');
                    hiddenPNG[index].style.display = 'none';

                } else {
                    hiddenPNG[index].style.display = 'block';
                    // console.log('PNG ditemukan');
                    getFileSize(bufferPNG, displaySizeFile[index]);// mengubah size pada element berdasarkan link
                    changeDisplay[index].src = bufferPNG;
                    getFileSize(bufferPNG, dowloandSizePNG[index]);// mengubah size pada element berdasarkan link
                    arrLinkDownload[index][0].href = bufferPNG; // ganti link dowload berdasarkan type bg yang dipilih

                }
                if (bufferJPG.length === 0) {
                    // console.log('JPG non');
                    hiddenJPG[index].style.display = 'none';
                } else {
                    hiddenJPG[index].style.display = 'block';
                    // console.log('JPG ditemukan');
                    getFileSize(bufferJPG, dowloandSizeJPG[index]);// same
                    arrLinkDownload[index][1].href = bufferJPG; // ganti link dowload berdasarkan type bg yang dipilih

                }
                if (bufferSVG.length === 0) {
                    // console.log('SVG non');
                    hiddenSVG[index].style.display = 'none';

                } else {
                    hiddenSVG[index].style.display = 'block';
                    // console.log('SVG ditemukan');
                    getFileSize(bufferSVG, dowloandSizeSVG[index]);
                    arrLinkDownload[index][2].href = bufferJPG; // ganti link dowload berdasarkan type bg yang dipilih

                }
            })
        })
    });

});



// Kodisi di saat user mengclick layar kecuali 'selectType' dan 'btnType'
document.addEventListener('click', function (e) {
    if (!selectType[indexSelectType].contains(e.target) &&
        !btnType[indexSelectType].contains(e.target)) {
        // megubah kondisi bahwa listType tidak active
        selectType[indexSelectType].classList.remove('type-active');
        iconType[indexSelectType].style.rotate = "0deg";
    }
})



const btnSearch = document.querySelector('.search');
const Section = document.querySelectorAll('.blur')

const searchInput = document.getElementById('SearchInput');
const OverlaySearch = document.querySelector('.Overlay-search');
const btnValueSearch = document.querySelector('.btn-search');
let overlay = false;


// function unutk mengaktifkan search
function activeSearch() {
    // melakukan check terhadap element itu apakah terdapat class 'search-hidden', jika true maka akan menghapus class nya 
    if (searchInput.classList.contains('search-hidden')) {
        searchInput.classList.remove('search-hidden');
    }
    searchInput.classList.add('search-active');// menulis class 'search-active' pad element

}

// function unutk mengnonaktifkan search
function hiddenSearch() {
    //masa saja dengan di saat tetapi ini sebaliknya
    if (searchInput.classList.contains('search-active')) {
        searchInput.classList.remove('search-active');
    }
    searchInput.classList.add('search-hidden');

}

// Function untuk menutup fitur search
function hiddenAllSearch() {
    Section.forEach(function (sec) {
        sec.style.filter = "blur(0px)";
    })
    OverlaySearch.style.opacity = "0";
    OverlaySearch.style.top = "-100vh";
    OverlaySearch.style.visibility = "hidden";
}

let itemStatusFound = true;

// Fitur search, akan melakukan blur terhadap backgroud atau (section) dan memuncul kan overlay search
btnSearch.addEventListener('click', function () {
    if (overlay) {  // jika overlay == ture 

        setTimeout(hiddenSearch, 0); //menutup bar search dengan fungsi rekursif setTimeout dan calling fungsi hiddenSearch
        setTimeout(hiddenAllSearch, 800); //menutup semua setelah janga waktu 8s
        overlay = false; // ubah status Ke nonActive


    } else { // jika tidak buka search
        // blurkan semua background
        Section.forEach(function (sec) {
            sec.style.filter = "blur(10px)";
        })
        OverlaySearch.style.opacity = "1";
        OverlaySearch.style.top = "0vh";
        OverlaySearch.style.visibility = "visible";
        setTimeout(activeSearch, 1400);
        overlay = true;
    }
});

function activateAnimationAndRemoveClass() {
    // Tambahkan class untuk mengaktifkan animasi
    searchInput.classList.add('inputInvaild');

    // Tambahkan event listener untuk event animasi selesai
    searchInput.addEventListener('animationend', function onAnimationEnd() {
        // Hapus class setelah animasi selesai
        searchInput.classList.remove('inputInvaild');

        // Hapus event listener agar tidak terulang
        searchInput.removeEventListener('animationend', onAnimationEnd);
    });
}

btnValueSearch.addEventListener('click', function () {
    if (itemStatusFound) {
        // console.log('ditemukan');
        setTimeout(hiddenSearch, 0);
        setTimeout(hiddenAllSearch, 800);
        overlay = false;
    } else {  // b
        // console.log('non ditemukan');
        // Panggil fungsi untuk mengaktifkan animasi 
        activateAnimationAndRemoveClass();
    }
})

// function for get file size
function getFileSize(Sampel, element) {

    // Lakukan permintaan GET untuk mendapatkan ukuran file
    fetch(Sampel)
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error('Gagal mengambil file.');
            }
        })
        .then(blob => {
            // Hitung ukuran blob (file gambar)
            const ukuran = blob.size;

            // Ubah ukuran byte menjadi ukuran yang lebih mudah dibaca (KB, MB, GB, dll.)
            const ukuranDalamKb = ukuran / 1024; // KB
            const ukuranDalamMb = ukuranDalamKb / 1024; // MB
            const ukuranDalamGb = ukuranDalamMb / 1024; // GB

            let ukuranTeks = "";
            if (ukuranDalamGb >= 1) {
                ukuranTeks = `${ukuranDalamGb.toFixed(2)} GB`;
            } else if (ukuranDalamMb >= 1) {
                ukuranTeks = `${ukuranDalamMb.toFixed(2)} MB`;
            } else {
                ukuranTeks = `${ukuranDalamKb.toFixed(2)} KB`;
            }

            // return `Ukuran file: ${ukuranTeks}`;
            // console.log(`Ukuran file: ${ukuranTeks}`);
            element.innerHTML = ukuranTeks
        })
        .catch(error => {
            console.error(error);
            element.innerHTML = `Eror ${error.message}`
            // return `Terjadi kesalahan: ${error.message}`;
        });

}




// animation element
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log((entry))
        if (entry.isIntersecting) {
            entry.target.classList.add('active-animation');
        } else {
            entry.target.classList.remove('active-animation')
        }
    });
});
const elementAnimation = document.querySelectorAll('.hidden-animation');
elementAnimation.forEach((el) => observer.observe(el));



let allNegative = true;

//Mecari item 
function searchEngine() {
    const valSearch = document.getElementById('SearchInput').value.toUpperCase();
    const item = document.querySelectorAll('.picture');

    item.forEach(function (e, index) {
        let match = e.querySelectorAll('.NameTag')[0];
        if (match) {
            let nameTagValue = match.innerHTML || match.innerText;
            if (nameTagValue.toUpperCase().indexOf(valSearch) > -1) {
                item[index].style.display = "block";
                allNegative = false;
            }
            else {
                item[index].style.display = "none";
            }
            // Kodisi di mana index telah mencapai batas terakhir
            if (index === item.length - 1) {
                if (allNegative) {
                    item.forEach(function (items) {
                        items.style.display = "";
                        itemStatusFound = false; // ubah status bar search menjadi false agar tidak menutup bar search
                        // console.log('tidak di temukan');
                    })
                } else {
                    itemStatusFound = true; // ubah status bar search menjadi false agar tidak menutup bar search
                    allNegative = true;
                }
            }
        }
    })
}

// Code Active Overlay Insagramc
const overlayInstagram = document.querySelector('.Overlay-instagram');
const btnInstagram = document.getElementById('btn-ig');
const contentInsagram = document.querySelector('.buffer')

btnInstagram.addEventListener('click', function () {
    if (!overlay) {
        overlayInstagram.classList.toggle('Overlay-instagram-active');

    }
})


document.addEventListener('click', function (e) {
    if (!contentInsagram.contains(e.target) && !btnInstagram.contains(e.target)) {
        overlayInstagram.classList.remove('Overlay-instagram-active');
    }
})



