


function teach() {
    var name = 'Nag'; // moved to heap before context-destroy
    try {
        console.log('teaching....');
        setTimeout(function (e) { 
            console.log('after timeout....${name} going to have tea');
            //throw new Error('hate this tea..');
        },5000);
        console.log('teaching further.....finished..');
    } catch (e) {
        console.log('i caught :- '+e.message);
    }
}

teach();