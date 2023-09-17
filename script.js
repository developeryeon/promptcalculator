
let SCISSORS;
let ROCK;
let PAPER;

let userInput = prompt('SCISSORS, ROCK, PAPER');


let comInput;

let random = Math.random();

    if (random < 0.33) {     //즉 1/3의 확률. 여기서 0.33 미만의 값이 걸러져서 굳이 else if에서 0.33이상이라 안써두됨.
        comInput = 'SCISSORS';
    }   else if(random < 0.66) { 
            comInput = 'ROCK';
            }   else {
                    comInput = 'PAPER';
                    }
                          
//컴퓨터 패 비교

if (userInput === 'SCISSORS') {
   
    if (comInput === 'SCISSORS') {
        alert('컴퓨터 : ' + comInput + '컴퓨터랑 비겼어요~~');
    }
    else if(comInput === 'ROCK') {
        alert('컴퓨터 :' + comInput + '컴퓨터에게 졌어요ㅠㅠ');
    }
        else {
            alert('컴퓨터 :' + comInput + '컴퓨터를 이겼어요!!!');
        }

} else if (userInput === 'ROCK') {
    if (comInput === 'SCISSORS') {
        alert('컴퓨터 : ' + comInput + '컴퓨터를 이겼어요!!!');
    }
    else if(comInput === 'ROCK') {
        alert('컴퓨터 :' + comInput + '컴퓨터랑 비겼어요~~');
    }
        else {
            alert('컴퓨터 :' + comInput + '컴퓨터에게 졌어요ㅠㅠ');
        }

} else if (userInput === 'PAPER') {
    if (comInput === 'SCISSORS') {
        alert('컴퓨터 : ' + comInput + '컴퓨터에게 졌어요ㅠㅠ');
    }
    else if(comInput === 'ROCK') {
        alert('컴퓨터 :' + comInput + '컴퓨터를 이겼어요!!!');
    }
        else {
            alert('컴퓨터 :' + comInput + '컴퓨터랑 비겼어요~~');
        }


} else { 
        alert('SCISSORS, ROCK, PAPER 중 하나를 입력하세요.');
}


