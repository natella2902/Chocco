    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.938,30.3],
            zoom: 9,
            center: [59.938,30.3],
        }, 
        {
        restrictMapArea: [
            [59.838,29.511],
            [60.056,30.829]
        ]
        });

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        
        myPlacemark = new ymaps.Placemark([59.9351,30.2362], {
            hintContent: 'Полезные батончики',
            balloonContent: 'у м. Василеостровская'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'pictures/balloon.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark2 = new ymaps.Placemark([59.9189,30.3148], {
            hintContent: 'Полезные батончики',
            balloonContent: 'у м. Балтийская'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'pictures/balloon.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark3 = new ymaps.Placemark([59.9604,30.3649], {
            hintContent: 'Полезные батончики',
            balloonContent: 'у м. Площадь Ленина'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'pictures/balloon.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3)
            
    }
