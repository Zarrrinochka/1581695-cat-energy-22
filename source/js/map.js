// function initMap() {

//   // Создаем маркер на карте
//   var marker = new google.maps.Marker({

//     // Определяем позицию маркера
//     position: { lat: 59.93885621476097, lng: 30.323122500257995 },

//     // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
//     map: map,

//     // Пишем название маркера - появится если навести на него курсор и немного подождать
//     title: 'Наш маркер: cat energy',

//     // Укажем свою иконку для маркера
//     //icon: 'source/img/map-pin.svg'
//     //icon: 'C:/Users/User/Desktop/projects/1581695-cat-energy-22/source/img/map-pin.svg'
//     icon: '../img/map-pin.svg'
//   });
// }

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', { // 'map' это твой id в разметке, куда ты хочешь засунуть карту
          center: [59.938635, 30.323118],
          zoom: 9
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
          iconImageSize: [48, 48], // здесь уже все просто и понятно , если переводить с английского названия свойств
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
