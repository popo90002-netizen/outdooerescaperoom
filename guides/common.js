// 스크린샷 위 표시: data-w/data-h = 원본 화면 좌표계, data-b = x,y,w,h
document.querySelectorAll('.shot').forEach(s=>{
  const W=+(s.dataset.w||390), H=+s.dataset.h;
  s.querySelectorAll('.mk').forEach(m=>{
    const [x,y,w,h]=m.dataset.b.split(',').map(Number);
    Object.assign(m.style,{left:x/W*100+'%',top:y/H*100+'%',width:w/W*100+'%',height:h/H*100+'%'});
  });
});
