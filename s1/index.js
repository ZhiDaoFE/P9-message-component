document.addEventListener('DOMContentLoaded', () => {
  const btn1 = new Button({
    id: 'btn1',
    onClick: () => {
      Message.info('学前端，来之道 —— 陪伴式自学前端圈子');
    }
  });

  const btn2 = new Button({
    id: 'btn2',
    onClick: () => {
      Message.info('提升前端开发的职业天花板，延长前端开发的职业寿命', 6000);
    }
  });
});
