// ЧЕРНЕТКА


// let flashcards = document.querySelector('.flashcards'),
//     btn2 = document.querySelector('.btn2'),
//     btnCreatCard = document.querySelector('.btn-creat-card'),
//     btnDelCard = document.querySelector('.btn-del-card'),
//     creatBox = document.querySelector('.creat-box')[0],
//     question = document.querySelector('#question'),
//     answer = document.querySelector('#answer'),
//     addFlashcard = document.querySelector('.add-flashcard'),
//     hideCreatBox = document.querySelector('.hide-creat-box'),
//     // flashcardInfo = {},
//     h2Qusetion = document.createElement("h2"),
//     h2Answer = document.createElement("h2"),
//     contentArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')): [];


// contentArray.forEach(divMarker);


// btnDelCard.addEventListener('click', function () {
//     localStorage.clear();
//     flashcards.innerHTML = '';
//     contentArray = [];
// } );

// hideCreatBox.addEventListener('click', function() {
//     creatBox.style.display = "none";
// });

// btnCreatCard.addEventListener('click', function() {
//     creatBox.style.display = "block";
// });

// addFlashcard.addEventListener('click', function() {
//     let flashcardInfo = {
//         'myQuestion' : question.value,
//         'myAnswer' :answer.value
//         };
//     contentArray.push(flashcardInfo);
//     localStorage.setItem('item', JSON.stringify(contentArray));
//     // contentArray = JSON.parse(localStorage.getItem('item'));
//     divMarker(contentArray[contentArray.lenght -1]);

//     question.value = '';
//     answer.value = '';
// } );



// // window.addEventListener('DOMContentLoaded', function(){

// //     // contentArray = JSON.parse(localStorage.getItem('item'));
// //     // lis();
// //     // console.log(contentArray);
// //     // if(contentArray.length > 0){
// //     // divMarker();
// //     // }
// //     // h2Qusetion.innerHTML = contentArray[0].myQuestion;
// // });
// function divMarker() {
//     let div = document.createElement("div"),
//         h2Question = document.createElement("h2"),
//         h2Answer = document.createElement("h2");

//         div.className = 'flashcard';
//         flashcards.appendChild(div);

//         h2Question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top: 30px");
//         // h2Question.innerHTML = flashcardInfo.myQuestion;


//         h2Answer.setAttribute('style', "text-align: center; display: none; color: red");
//         // h2Answer.innerHTML = flashcardInfo.myAnswer;
//         for(let i = 0; i < contentArray.length; i++){
//             h2Question.innerHTML = contentArray[i].myQuestion;
//             h2Answer.innerHTML = contentArray[i].myAnswer;
//         }

//         div.appendChild(h2Question);
//         div.appendChild(h2Answer);

//         div.addEventListener('click', function() {
//             if(h2Answer.style.display == "none") {
//                 h2Answer.style.display = "block";
//             }else{
//                 h2Answer.style.display = "none";
//             }
//         });
// }

// // function lis() {
    
    
// //     for(let i = 0; i < contentArray.length; i++) {
// //         console.log(i);
// //         let div = document.createElement("div"),
// //             h2Question = document.createElement("h2"),
// //             h2Answer = document.createElement("h2");

// //         div.className = 'flashcard';

// //         h2Question.classList = ('question');
// //         h2Question.innerHTML = contentArray[i].myQuestion;

// //         h2Answer.classList = ('answer-show');
// //         h2Answer.innerHTML = contentArray[i].myAnswer;

// //         div.appendChild(h2Question);
// //         div.appendChild(h2Answer);

// //         flashcards.appendChild(div);


// //     }
    
// // }

// // let card = document.getElementsByClassName('flashcard');


// // function showAnswer() {
// //     card.addEventListener('click', function(event) {
// //         let targetItem = event.target;
// //         if (targetItem.closest('flashcard')) {
// //             console.log(card);
// //         }
// //     });
// // }
// // showAnswer();



//     // card[0].addEventListener('click', function() {
//     //     console.log(123);
//     //     if(h2Answer.classList == "answer-hide") {
//     //         h2Answer.classList = ('answer-show');
//     //     }else{
//     //         h2Answer.classList = "answer-hide";
//     //     }
//     // });
//     // card[3].setAttribute('style', "background-color: red");