// Code your solutions in this file

// for (let age=30;age<40;age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }
// const gifts =['teddy bear','drone','doll'];
// function wrapGifts(gifts){
//     for(let i = 0;i< gifts.length;i++){
//         console.log(`Wrapped ${gifts[i]} and added a bowl`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);
// const names = ["Charlie", "Samip", "Ali"]

function writeCards(names,eventname){
    const messages =[];
    for(let i=0; i<names.length;i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
        
    }
    return messages;
}
function countDown(count){
    
    while(count>=0){
        console.log (count--);
    }
    
}