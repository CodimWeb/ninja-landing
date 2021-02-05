'use strict'

// import $ from 'jquery';

//BS4 components
// import bootstrap from 'bootstrap';

//styles
import '../scss/style.scss';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
    document.body.classList.add('is-mobile')
  } else {
    // код для обычных устройств
    document.body.classList.remove('is-mobile')
}