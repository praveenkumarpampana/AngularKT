

// counter-module

// var count = 0; // global-context

// function doCount() {
//     var count = 0;
//     count++;
// }

// function getCount(){
//     return count;
// }

//-------------------------------

// --> to abstract public- behav any js- module

const counter=(function() {
    var i = 0;
    var count = 0; // private
    // public    
    return {
        doCount: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
})();

//var counter = init();