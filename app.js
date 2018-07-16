// $(document).ready(function () {
//   var boxArray = [2, 4, 5, 6, 7, 8, 9];
//
//
//   var $box2 = $('.box-2');
//   var $box9 = $('.box-9');
//   var $box4 = $('.box-4');
//   var $box5 = $('.box-5');
//   var $box6 = $('.box-6');
//   var $box7 = $('.box-7');
//   var $box8 = $('.box-8');
//
//
//
//
//
//   $box2.on('click', () => {
//     $box2.css('grid-area', 'box-6');
//     $box6.css('grid-area', 'box-2');
//   });
//
//   $box6.on('click', () => {
//     let random = Math.floor(Math.random() * 2);
//     if (random === 1) {
//       box6.idList.toggle('box-2');
//       box2.idList.toggle('box-6');;
//     } else {
//       box6.idList.toggle('box-5');;
//       box5.idList.toggle('box-6');;
//     }
//   });
//
// });


var box2 = document.querySelector('.box-2')
var box4 = document.querySelector('.box-4')
var box5 = document.querySelector('.box-5')
var box6 = document.querySelector('.box-6')
var box7 = document.querySelector('.box-7')
var box8 = document.querySelector('.box-8')
var box9 = document.querySelector('.box-9')

box6.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 2);

  if (box6.classList.contains('box2-js')) {
    box6.classList.toggle('box2-js');
    box6.classList.toggle('box6-js');
    box2.classList.toggle('box6-js');
    box2.classList.toggle('box2-js');
  } else if (box6.classList.contains('box5-js')) {
    box6.classList.toggle('box5-js');
    box6.classList.toggle('box6-js');
    box5.classList.toggle('box6-js');
    box5.classList.toggle('box5-js');
  } else {
    if (random === 1) {
      box6.classList.toggle('box2-js');
      box6.classList.toggle('box6-js');
      box2.classList.toggle('box6-js');
      box2.classList.toggle('box2-js');
    } else {
      box6.classList.toggle('box5-js');
      box6.classList.toggle('box6-js');
      box5.classList.toggle('box6-js');
      box5.classList.toggle('box5-js');
    }
  }
});

box5.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 3);

  if (box5.classList.contains('box6-js')) {
    box5.classList.toggle('box6-js');
    box5.classList.toggle('box5-js');
    box6.classList.toggle('box5-js');
    box6.classList.toggle('box6-js');
  } else if (box5.classList.contains('box4-js')) {
    box5.classList.toggle('box4-js');
    box5.classList.toggle('box5-js');
    box4.classList.toggle('box5-js');
    box4.classList.toggle('box4-js');
  } else if (box5.classList.contains('box8-js')) {
    box5.classList.toggle('box8-js');
    box5.classList.toggle('box5-js');
    box8.classList.toggle('box5-js');
    box8.classList.toggle('box8-js');
  } else {
    if (random === 1) {
      box5.classList.toggle('box4-js');
      box5.classList.toggle('box5-js');
      box4.classList.toggle('box5-js');
      box4.classList.toggle('box4-js');
    } else if (random === 2) {
      box5.classList.toggle('box6-js');
      box5.classList.toggle('box5-js');
      box6.classList.toggle('box6-js');
      box6.classList.toggle('box5-js');
    } else {
      box5.classList.toggle('box8-js');
      box5.classList.toggle('box5-js');
      box8.classList.toggle('box8-js');
      box8.classList.toggle('box5-js');
    }
  }
});

box2.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 2);

  if (box2.classList.contains('box2-js')) {
    box6.classList.toggle('box2-js');
    box6.classList.toggle('box6-js');
    box2.classList.toggle('box6-js');
    box2.classList.toggle('box2-js');
  } else {
    box6.classList.toggle('box2-js');
    box6.classList.toggle('box6-js');
    box2.classList.toggle('box6-js');
    box2.classList.toggle('box2-js');
  }
});

box4.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 2);

  if (box4.classList.contains('box5-js')) {
    box4.classList.toggle('box5-js');
    box4.classList.toggle('box4-js');
    box5.classList.toggle('box4-js');
    box5.classList.toggle('box5-js');
  } else if (box4.classList.contains('box7-js')) {
    box4.classList.toggle('box7-js');
    box4.classList.toggle('box4-js');
    box7.classList.toggle('box4-js');
    box7.classList.toggle('box7-js');
  } else {
    if (random === 1) {
      box4.classList.toggle('box4-js');
      box4.classList.toggle('box7-js');
      box7.classList.toggle('box7-js');
      box7.classList.toggle('box4-js');
    } else {
      box4.classList.toggle('box4-js');
      box4.classList.toggle('box5-js');
      box5.classList.toggle('box5-js');
      box5.classList.toggle('box4-js');
    }
  }
});

box7.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 2);

  if (box7.classList.contains('box4-js')) {
    box7.classList.toggle('box4-js');
    box7.classList.toggle('box7-js');
    box4.classList.toggle('box7-js');
    box4.classList.toggle('box4-js');
  } else if (box7.classList.contains('box8-js')) {
    box7.classList.toggle('box8-js');
    box7.classList.toggle('box7-js');
    box8.classList.toggle('box7-js');
    box8.classList.toggle('box8-js');
  } else {
    if (random === 1) {
      box7.classList.toggle('box7-js');
      box7.classList.toggle('box8-js');
      box8.classList.toggle('box8-js');
      box8.classList.toggle('box7-js');
    } else {
      box7.classList.toggle('box7-js');
      box7.classList.toggle('box4-js');
      box4.classList.toggle('box4-js');
      box4.classList.toggle('box7-js');
    }
  }
});

box8.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 3);

  if (box8.classList.contains('box5-js')) {
    box8.classList.toggle('box5-js');
    box8.classList.toggle('box8-js');
    box5.classList.toggle('box8-js');
    box5.classList.toggle('box5-js');
  } else if (box8.classList.contains('box7-js')) {
    box8.classList.toggle('box7-js');
    box8.classList.toggle('box8-js');
    box7.classList.toggle('box8-js');
    box7.classList.toggle('box7-js');
  } else if (box8.classList.contains('box9-js')) {
    box8.classList.toggle('box9-js');
    box8.classList.toggle('box8-js');
    box9.classList.toggle('box8-js');
    box9.classList.toggle('box9-js');
  } else {
    if (random === 1) {
      box8.classList.toggle('box8-js');
      box8.classList.toggle('box5-js');
      box5.classList.toggle('box5-js');
      box5.classList.toggle('box8-js');
    } else if (random === 2) {
      box8.classList.toggle('box8-js');
      box8.classList.toggle('box7-js');
      box7.classList.toggle('box7-js');
      box7.classList.toggle('box8-js');
    } else {
      box8.classList.toggle('box8-js');
      box8.classList.toggle('box9-js');
      box9.classList.toggle('box9-js');
      box9.classList.toggle('box8-js');
    }
  }
});

box9.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 2);

  if (box9.classList.contains('box8-js')) {
    box9.classList.toggle('box8-js');
    box9.classList.toggle('box9-js');
    box8.classList.toggle('box9-js');
    box8.classList.toggle('box8-js');
  } else if (box9.classList.contains('box6-js')) {
    box9.classList.toggle('box6-js');
    box9.classList.toggle('box9-js');
    box6.classList.toggle('box9-js');
    box6.classList.toggle('box6-js');
  } else {
    if (random === 1) {
      box9.classList.toggle('box6-js');
      box9.classList.toggle('box9-js');
      box6.classList.toggle('box9-js');
      box6.classList.toggle('box6-js');
    } else {
      box9.classList.toggle('box8-js');
      box9.classList.toggle('box9-js');
      box8.classList.toggle('box9-js');
      box8.classList.toggle('box8-js');
    }
  }
});
