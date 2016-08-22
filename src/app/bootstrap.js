// styles
import 'style/main.scss';

import Wallop from 'wallop';

document.addEventListener('DOMContentLoaded', (ev) => {
  const sliderEl = document.querySelector('.Slider');
  const slider = new Wallop(sliderEl);
});
