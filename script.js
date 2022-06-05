let flashcards = document.querySelector('.flashcards'),
    btnCreatCard = document.querySelector('.btn-creat-card'),
    btnDelCard = document.querySelector('.btn-del-card'),
    creatBox = document.querySelector('.creat-box'),
    question = document.querySelector('#question'),
    answer = document.querySelector('#answer'),
    addFlashcard = document.querySelector('.add-flashcard'),
    hideCreatBox = document.querySelector('.hide-creat-box'),
    flashcardInfo = {},
    h2Question = document.createElement("h2"),
    h2Answer = document.createElement("h2"),
    contentArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')): [];


contentArray.forEach(divMarker);

btnDelCard.addEventListener('click', function () {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
} );

hideCreatBox.addEventListener('click', function() {
    creatBox.style.display = "none";
});

btnCreatCard.addEventListener('click', function() {
    creatBox.style.display = "block";
});

addFlashcard.addEventListener('click', function() {
    flashcardInfo = {
        'myQuestion' : question.value,
        'myAnswer' : answer.value,
        };
    contentArray.push(flashcardInfo);
    localStorage.setItem('item', JSON.stringify(contentArray));
    divMarker(contentArray[contentArray.length - 1], contentArray.length - 1);
    question.value = '';
    answer.value = '';
} );

function divMarker(text) {
    let div = document.createElement("div"),
        h2Question = document.createElement("h2"),
        h2Answer = document.createElement("h2");

        div.className = 'flashcard';
        flashcards.appendChild(div);
        div.appendChild(h2Question);
        div.appendChild(h2Answer);

        h2Question.classList = ('question');
        h2Question.innerHTML = text.myQuestion;
        h2Answer.classList = ('answer-hide');
        h2Answer.innerHTML = text.myAnswer;
       
        div.addEventListener('click', function() {
            if(h2Answer.classList == "answer-hide") {
                h2Answer.classList = ('answer-show');
            }else{
                h2Answer.classList = "answer-hide";
            }
        });
}