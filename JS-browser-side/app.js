
// document.addEventListener('DOMContentLoaded', function () { 
//     console.log('DOM ready...');
//     // using DOM API
//     var box = document.querySelector('.jumbotron');
//     var hideBtn = document.querySelector('.btn-danger');
//     var showBtn = document.querySelector('.btn-primary');


//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     });
//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     });

// });


// window.onload = function () {
//     console.log('load-event');
// }

//-----------------------------------------------

$(document).ready(function () {

    var $box = $('.jumbotron');
    $('.btn-danger').click(function (e) { 
        $box.hide(5000);
    });
     $('.btn-primary').click(function (e) { 
         $box.show(5000);
    });

 });