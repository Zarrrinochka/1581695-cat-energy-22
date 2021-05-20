ymaps.ready(function () {
  var myMap = new ymaps.Map('map', { // 'map' это твой id в разметке, куда ты хочешь засунуть карту
          center: [59.938635, 30.323118],
          zoom: 14
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'HTML Academy, first level',
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: '../img/map-pin.svg', // здесь мы указываем путь до нашей картинки пина (метки)
          // Размеры метки.
          iconImageSize: [57, 53], // здесь уже все просто и понятно , если переводить с английского названия свойств
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-27, -48],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
});
