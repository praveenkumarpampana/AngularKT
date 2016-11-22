

var teachService = {
    doTeach: function () {
        //console.log(this);
        console.log(this.name+" teaching .js");
    }
};

var trainer = {
    name:'Ria'
};


var teachBtn = document.getElementById('teachBtn');
// teachBtn.addEventListener('click',teachService.doTeach);

//soln-1
// teachBtn.addEventListener('click', function () {
//     //teachService.doTeach();
//     teachService.doTeach.call(trainer);     
// });
 
// better soln 
teachBtn.addEventListener('click',teachService.doTeach.bind(trainer));



