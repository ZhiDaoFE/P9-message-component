document.addEventListener('DOMContentLoaded', () => {
  const btn1 = new Button({
    id: 'btn1',
    onClick: () => {
      Message.info('学前端，来之道 —— 陪伴式自学前端圈子');
    }
  });

  let info2;
  const btn2 = new Button({
    id: 'btn2',
    onClick: () => {
      info2 = Message.info('提升前端开发的职业天花板，延长前端开发的职业寿命', 6000);
    }
  });

  const btn3 = new Button({
    id: 'btn3',
    onClick: () => {
      const img = document.createElement('img');
      img.classList.add('img');
      img.src = './assets/logo.jpg';

      Message.info(img, 4000);
    }
  });

  const btn4 = new Button({
    id: 'btn4',
    onClick: () => {
      info2 && info2.setInfo('打造万人共学前端圈子');
    }
  });
});
