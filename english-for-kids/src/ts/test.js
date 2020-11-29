import Menu from './block/menu';
import Control from './utils/control';
import Card from './block/card';
import MenuCard from './block/menu_card';
import Toggle from './block/toggle';
import Field from './block/feild';

fetch('../assets/data.json').then((res) => res.json()).then((json) => {
  const header = new Control(document.body, 'header', 'header', '<h1>English for kids </h1>');
  const mode = new Toggle(header.node, 'mode');
  const main = new Control(document.body, 'main', 'main');
  const field = new Field(main.node, 'field', mode.isChecked);
  const elem = new Menu(header.node, 'menu', 'menuitem menuitem--none', 'menuitem menuitem--selected');

  elem.addItem('menu');
  json.forEach((item) => elem.addItem(item.category, item.categoryImg));
  elem.addItem('score');

  elem.onChange = (ind) => {
    location.hash = elem.content[ind];
  };

  window.onpopstate = () => {
    const categoryHash = location.hash.slice(1);
    field.clear();
    field.cards = [];
    field.modeStatus = mode.isChecked;

    switch (categoryHash) {
      case 'menu':
        for (let i = 0; i < json.length; i += 1) {
          const data = [json[i].category, json[i].categoryImg];
          new MenuCard(field.node, 'card', 'card2', data);
        }
        break;
      case 'score':
        field.node.innerText = 'статистика';
        break;
      default:
        const ourCategoryData = json.find((item) => categoryHash === item.category).data;
        for (let i = 0; i < ourCategoryData.length; i += 1) {
          field.addItem(ourCategoryData[i]);
        }
        if (mode.isChecked) {
          field.playMode();
        }
    }

    let index;
    for (let i = 0; i < elem.content.length; i += 1) {
      if (elem.content[i] === categoryHash) {
        index = i;
      }
    }
    elem.select(index);
  };

  mode.node.addEventListener('click', () => {
    window.onpopstate();
  });

  location.hash ? window.onpopstate() : elem.select(0);
});
