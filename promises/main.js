const images1 = "images1";
const images2 = "images2";
const images3 = "images3";
const images4 = "images4";
const images5 = "images5";
const images6 = "images6";

class Images {
    constructor() {
        var self = this;
        self.index = 0;
        self.arrayOfImages = [
            "http://multgubkabob.ru/data/uploads/pic/20.jpg",
            "http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_01.jpg",
            "https://art-apple.ru/albums/userpics/10001/mURI_temp_7b977ca1.jpg",
            "https://avatarko.ru/img/kartinka/15/volk_luna_14613.jpg",
            "http://imagetext.ru/pics_max/images_3166.jpg",
            "https://i.ytimg.com/vi/BvL3bx26mRs/maxresdefault.jpg",
            "https://ianimal.ru/wp-content/uploads/2011/01/skzh-16-11.jpg",
            "http://www.pavelin.ru/images/stories/lis/lis_001.jpg",
            "http://goodimg.ru/img/prikolnyie-kartinki-na-rabochiy-stol4.jpg",
            "https://vignette.wikia.nocookie.net/astronomy/images/d/d6/Mercury-l-1.jpg/revision/latest?cb=20140730161852&path-prefix=ru",
            "http://ngorod.net/images/2013-11/geyzer-strokkur-10.jpg",
            "http://goodimg.ru/img/skachat-oboi5.jpg",
            "https://avatarko.ru/img/kartinka/9/kot_8173.jpg",
            "https://dreem-pics.com/uploads/posts/2017-03/1490579439_oboi-priroda-skachat-besplatno.orig.jpg",
            "http://turist100.ru/photo/4/oskal_medvedya_1024x768.jpg",
            "http://www.kartinki24.ru/uploads/gallery/main/331/kartinki24_birds_0006.jpg",
            "http://www.tione.ru/_ph/5/21643145.jpg",
            "http://imagetext.ru/pics_max/images_3347.jpg"
        ];
    }
    toString() {
        console.log(this.index);
        return this.arrayOfImages[this.index++];
    }
}

var images = new Images();

function loadImageWithoutAdd(url, index) {
    return new Promise(function (resolve) {
        let img = new Image();
        img.width = 100;
        img.src = url;
        img.addEventListener('load', function (image) {
            resolve({
                index: index,
                image: image.path[0]
            });
        })
    });
}

//1. Картинки загружаются синхронно (по очереди). Появляются по очереди 
{
    function loadImages1(id) {
        loadImageWithoutAdd(images.toString())
            .then((data) => {
                document.getElementById(id).append(data.image);
                loadImageWithoutAdd(images.toString())
                    .then((data) => {
                        document.getElementById(id).append(data.image);
                        loadImageWithoutAdd(images.toString())
                            .then((data) => {
                                document.getElementById(id).append(data.image);
                            });
                    });
            })
    }
    loadImages1(images1);
}

//2. Картинки загружаются синхронно (аналог 1)
{
    async function loadImages2(id) {
        await loadImageWithoutAdd(images.toString())
            .then((data) => {
                document.getElementById(id).append(data.image)
            });
        await loadImageWithoutAdd(images.toString())
            .then((data) => {
                document.getElementById(id).append(data.image)
            });
        await loadImageWithoutAdd(images.toString())
            .then((data) => {
                document.getElementById(id).append(data.image)
            });;
    };
    loadImages2(images2);
}

//3. Картинки загружаются ассинхронно и на событие load добавляются в div без соблюдения порядка
{
    function loadImages3(id) {
        loadImageWithoutAdd(images.toString())
            .then((data) => {
                document.getElementById(id).append(data.image)
            });
        loadImageWithoutAdd(images.toString())
            .then((data) => {
                document.getElementById(id).append(data.image)
            });
        loadImageWithoutAdd(images.toString())
            .then((data) => {
                document.getElementById(id).append(data.image)
            });
    };
    loadImages3(images3)
}

//4. Картинки загружаются ассинхронно и на событие load добавляются в div c соблюдением порядка по очереди
{
    function loadImages4(id, array) {
        let queue = [];
        let q = 0;
        for (let i = 0; i < array.length; i++) {
            loadImageWithoutAdd
                (array[i], i)
                .then(function (data) {
                    if (data.index === q) {
                        document.getElementById(id).append(data.image);
                        q++;
                    } else {
                        queue.push({
                            index: data.index,
                            image: data.image
                        });
                    }
                    queue.sort(function (a, b) {
                        return a.index - b.index;
                    });
                    for (let j = 0; j < queue.length; j++) {
                        if (queue[j] && queue[j].index === q) {
                            document.getElementById(id).append(queue[j].image);
                            q++;
                            delete queue[j];
                        }
                    }
                });
        }
    }
    loadImages4(images4, [
        images.toString(),
        images.toString(),
        images.toString()
    ]);
}

//5. Картинки загружаются ассинхронно и на событие load добавляются в div c соблюдением порядка без очереди
{
    function loadImages5(id, array) {
        let promises = [];
        for (let i = 0; i < array.length; i++) {
            let a = document.createElement('a');
            a.href = array[i];
            document.getElementById(id).append(a);
            loadImageWithoutAdd
                (array[i], i).then(data => {
                    document.querySelectorAll(`a[href^="${data.image.src}"]`)[0].append(data.image);
                });
        }
    }

    loadImages5(images5, [
        images.toString(),
        images.toString(),
        images.toString()
    ]);
}

//6. Ассинхронно onload all
{
    function loadImages6(id, array) {
        let promises = [];
        for (let i = 0; i < array.length; i++) {
            promises.push(loadImageWithoutAdd(array[i], i));
        }
        Promise.all(promises).then(values => {
            for (let i = 0; i < values.length; i++) {
                document.getElementById(id).append(values[i].image);
            }
        })
    }
    loadImages6(images6, [
        images.toString(),
        images.toString(),
        images.toString()
    ]);
}