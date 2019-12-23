$(document).ready(function() {

let questionNumber = 0;
let time = 15;
let rightAnswers = 0;
let wrongAnswers = 0;


// Display questions - list of questions
//     array of abjects
//         question object, plus 4 answers
    

    let questions = [
        {
            question: "What state does South Park take place in?",
            choices: ["Nebraska", "Montana","Ohio", "Colorado"],
            correctAnswer: "Colorado",
            image: "<img src='assets/images/q1.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'Awesom-o', where do Butters and Cartman go?",
            choices: ["Denver", "Las Vegas", "Hollywood", "L.A."],
            correctAnswer: "L.A.",
            image: "<img src='assets/images/q2.jpg' height='200px', width='300px'>"
        },
        {
            question: "Where was the Mexican Staring Frog from?",
            choices: ["Sri Lanka", "Morocco", "Madagascar", "Mexico"],
            correctAnswer: "Sri Lanka",
            image: "<img src='assets/images/q3.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'The Death of Eric Cartman', why do the boys ignore Cartman?",
            choices: ["He took all of the candy", "He embarrased everyone in class", "He ate the skins off their KFC chicken", "He farted and it smelled really bad"],
            correctAnswer: "He ate the skins off their KFC chicken",
            image: "<img src='assets/images/q4.jpg' height='200px', width='300px'>"
        },
        {
            question: "What does Towelie like to do?",
            choices: ["Dry people", "Hang out", "Get high", "Go on adventures"],
            correctAnswer: "Get High",
            image: "<img src='assets/images/q5.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'Cartoon Wars Part I', what person is going to be shown on 'Family Guy'?",
            choices: ["Jesus", "Muhammad", "Buddha", "Tom Cruise"],
            correctAnswer: "Muhammad",
            image: "<img src='assets/images/q6.jpg' height='200px', width='300px'>",
        },
        {
            question: "What videogame console does Cartman get frozen for 500+ years for?",
            choices: ["Okama Gamesphere", "PS4", "Nintendo Wii", "Xbox"],
            correctAnswer: "Nintendo Wii",
            image: "<img src='assets/images/q7.jpg' height='200px', width='300px'>"
        },
        {
            question: "In this episode, Cartman and the gang start their own boy band.",
            choices: ["Cartman Joins N.A.M.B.L.A.","Timmy 2000", "Quintuplets 2000", "Something You Can Do With Your Finger"],
            correctAnswer: "Something You Can Do With Your Finger",
            image: "<img src='assets/images/q8.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'Cartoon Wars Part II', what are the writers of 'Family Guy'?",
            choices: ["Manatees", "Funny", "Aliens", "Geniuses"],
            correctAnswer: "Manatees",
            image: "<img src='assets/images/q9.jpeg' height='200px', width='300px'>"
        },
        {
            question: "In the 'Lord of the Rings' episode, who plays the role of Gollum (a.k.a. 'Sméagol')?",
            choices: ["Clyde", "Tweek", "Butters", "Token"],
            correctAnswer: "Butters",
            image: "<img src='assets/images/q10.jpg' height='200px', width='300px'>"
        },
        {
            question: "In this sixth season episode, two new characters are introduced: Mr. Slave and Lemmiwinks the gerbil.",
            choices: ["Fun With Veal", "Red Hot Catholic Love", "Freak Strike", "The Death Camp of Tolerance"],
            correctAnswer: "The Death Camp of Tolerance",
            image: "<img src='assets/images/q11.jpg' height='200px', width='300px'>"
        },
        {
            question: "Jesus had a talk show called what?",
            choices: ["Jesus and Pals", "Jesus and Friends", "Jesus Talks", "Jesus Comes Again"],
            correctAnswer: "Jesus and Pals",
            image: "<img src='assets/images/q11.jpg' height='200px', width='300px'>"
        },
        {
            question: "Who performs the exorcism to remove Kenny's soul from Cartman's body?",
            choices: ["Native Americans", "Mr. Garrison", "Santa", "Chef's Mom"],
            correctAnswer: "Chef's Mom",
            image: "<img src='assets/images/q12.jpg' height='200px', width='300px'>"
        },
        {
            question: "Who is Eric Cartman's father?",
            choices: ["Jack Tenorman", "Chef", "Jimbo", "Mefesto"],
            correctAnswer: "Jack Tenorman",
            image: "<img src='assets/images/q13.png' height='200px', width='300px'>"
        },
        {
            question: "Who ran against Ike for Kindergarten class president?",
            answers: ["Filmore", "Clyde", "Jack", "Scotty"],
            correctAnswer: "Filmore",
            image: "<img src='assets/images/q14.jpg' height='200px', width='300px'>"
        },
        {
            question: "What is the name of Stan's sister?",
            answers: ["Kelly", "Hailey", "Shelly", "Jelly"],
            correctAnswer: "Shelly",
            image: "<img src='assets/images/q15.jpg' height='200px', width='300px'>"
        }];
//     select a question to start game
        // $("#qBox").beginGame();

    function theQuestion() {
        $("#triviaScreen").append("<p>" + 
        questions[questionNumber].question + 
        "</p><p class='choices'>" + 
        questions[questionNumber].choices[0] + 
        "</p><p class='choices'>" + 
        questions[questionNumber].choices[1] + 
        "</p><p class='choices'>" + 
        questions[questionNumber].choices[2] + 
        "</p><p class='choices'>" + 
        questions[questionNumber].choices[3] + 
        "</p>");
        
    }
        // console.log(questionNumber, questions);

//     function for when correct - add point to correct score

    function win() {
        $("#triviaScreen").html("<p>That's Right!</p>");
        rightAnswers++;
        let correctAnswer = questions[questionNumber].correctAnswer;
        $("#triviaScreen").append("<p>The answer is <span class='answer'>" + 
        correctAnswer + 
        "</span></p>" + 
        questions[questionNumber].image);
        setTimeout(nextQuestion, 4000);
        questionNumber++;
    }
        // console.log(rightAnswers)

//     function when incorrect - add point to incorrect score

    function lose() {
        $("#triviaScreen").html("<p>Wrong! You Suck!</p>");
        wrongAnswers++;
        let correctAnswer = questions[questionNumber].correctAnswer;
        $("#triviaScreen").append("<p>The answer is <span class='answer'>" + 
        correctAnswer + 
        "</span></p>" + 
        questions[questionNumber].image);
        setTimeout(nextQuestion, 4000);
        questionNumber++;
    }
    // console.log(wrongAnswers)
//     ran out of time - add point to incorrect score

    function userTimeout() {
        if (time === 0) {
            $("#triviaScreen").html("<p>You are too slow!</p>");
            wrongAnswers++;
            var correctAnswer = questions[questionNumber].correctAnswer;
            $("#triviaScreen").append("<p>The answer is <span class='answer'>" + 
                correctAnswer +
                "</span></p>" +
                questions[questionNumber].image);

            setTimeout(nextQuestion, 4000);
            questionNumber++;
        }
    }
    // console.log(questionNumber);

//     show user end-of-game screen with corrects, incorrects, and total score
    function answerScreen() {
        if (rightAnswers === questions.length) {
            endMessage = "Wow, what a geek.";
            bottomText = "Neeeeeerrrdddd!";
        }
        else if (rightAnswers > wrongAnswers) {
            endMessage = "Guess more are right than wrong.";
            bottomText = "You surprised everyone actually.";
        }
        else {
            endMessage = "You SUUCCKK!!!";
            bottomText = "PFFFFTTTT!";
        }
        $("#triviaScreen").html("<p>" + endMessage + "</p>" + "<p> You got " + 
            rightAnswers + "right. </p>" + 
            "<br>" + 
            "<p> You got " + wrongAnswers + "wrong.</p>");
        $("#triviaScreen").append("<h2 id='start'> Play Again </h2>");

        $("#bottomText").html(bottomText);

        gameReset();

        $("#start").click(nextQuestion);
        }
    // console.log(rightAnswers, wrongAnswers)
    //     start a timer of 20 seconds
    function timer() {
        clock = setInterval(countDown, 1000);
        // let time = 20;
        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                userTimeout();
            }
            if (time > 0) {
                time--;
            }
            $("#timer").html("<strong>" + time + "</strong>");
        }
    }
    function nextQuestion() {
        if (questionNumber < questions.length) {
            time = 20;
            $("#triviaScreen").html("<h3>You have <span id='timer'>" + time + "</span> to get it right.</h3>");
            theQuestion();
            timer();
            userTimeout();
        }
        else {
            answerScreen();
        }
    }
        //     after last question reset game with a button (not refresh page)
        //         reset scores
        //         restart questions
        function gameReset() {
            questionNumber = 0;
            rightAnswers = 0;
            wrongAnswers = 0;
        }


    function startGame() {
        $("#triviaScreen").html("<h3> You have <span id='timer'>" + time + "</span> seconds to get it right!</h3>");
        $("#start").hide();
        theQuestion();
        timer();
        userTimeout();
    }
    // console.log(time);
    $("#start").click(nextQuestion);

    $("#triviaScreen").on("click", ".choices", (function() {
            let userGuess = $(this).text();
            if (userGuess === questions[questionNumber].correctAnswer) {
                clearInterval(clock);
                win();
            } else {
                clearInterval(clock);
                lose();
            }
        }));

});