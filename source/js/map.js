function initMap() {

  // Создаем маркер на карте
  var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: { lat: 59.93885621476097, lng: 30.323122500257995 },

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Наш маркер: cat energy',

    // Укажем свою иконку для маркера
    //icon: 'source/img/map-pin.svg'
    //icon: 'C:/Users/User/Desktop/projects/1581695-cat-energy-22/source/img/map-pin.svg'
    icon: '../img/map-pin.svg'
  });
}
