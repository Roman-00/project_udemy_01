import './slider';

// Импортируем модальное окно
import modals from './modules/modals';

//Импортируем табы
import tabs from './modules/tabs';



window.addEventListener('DOMContentLoaded', () => {

  //Вызываем модальное окно
  modals();

  //Вызываем табы
  tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

});