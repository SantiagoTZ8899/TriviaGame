$(document).ready(function() {
// Display questions - list of questions
//     array of abjects
//         question object, plus 4 answers
    let questionNumber = 0;
    let time = 20;
    let rightAnswers = 0;
    let wrongAnswers = 0;

    let questions = [
        {
            question: "What state does South Park take place in?",
            answers: ["Nebraska", "Montana","Ohio", "Colorado"],
            correctAnswer: "Colorado",
            image: "<img src='assets/images/q1.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'Awesom-o', where do Butters and Cartman go?",
            answers: ["Denver", "Las Vegas", "Hollywood", "L.A."],
            correctAnswer: "L.A.",
            image: "<img src='assets/images/q2.jpg' height='200px', width='300px'>"
        },
        {
            question: "Where was the Mexican Staring Frog from?",
            answers: ["Sri Lanka", "Morocco", "Madagascar", "Mexico"],
            correctAnswer: "Sri Lanka",
            image: "<img src='assets/images/q3.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'The Death of Eric Cartman', why do the boys ignore Cartman?",
            answers: ["He took all of the candy", "He embarrased everyone in class", "He ate the skins off their KFC chicken", "He farted and it smelled really bad"],
            correctAnswer: "He ate the skins off their KFC chicken",
            image: "<img src='assets/images/q4.jpg' height='200px', width='300px'>"
        },
        {
            question: "What does Towelie like to do?",
            answers: ["Dry people", "Hang out", "Get high", "Go on adventures"],
            correctAnswer: "Get High",
            image: "<img src='assets/images/q5.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'Cartoon Wars Part I', what person is going to be shown on 'Family Guy'?",
            answers: ["Jesus", "Muhammad", "Buddha", "Tom Cruise"],
            correctAnswer: "Muhammad",
            image: "<img src='assets/images/q6.jpg' height='200px', width='300px'>",
        },
        {
            question: "What videogame console does Cartman get frozen for 500+ years for?",
            answers: ["Okama Gamesphere", "PS4", "Nintendo Wii", "Xbox"],
            correctAnswer: "Nintendo Wii",
            image: "<img src='assets/images/q7.jpg' height='200px', width='300px'>"
        },
        {
            question: "In this episode, Cartman and the gang start their own boy band.",
            answers: ["Cartman Joins N.A.M.B.L.A.","Timmy 2000", "Quintuplets 2000", "Something You Can Do With Your Finger"],
            correctAnswer: "Something You Can Do With Your Finger",
            image: "<img src='assets/images/q8.jpg' height='200px', width='300px'>"
        },
        {
            question: "In the episode 'Cartoon Wars Part II', what are the writers of 'Family Guy'?",
            answers: ["Manatees", "Funny", "Aliens", "Geniuses"],
            correctAnswer: "Manatees",
            image: "<img src='assets/images/q9.jpeg' height='200px', width='300px'>"
        },
        {
            question: "In the 'Lord of the Rings' episode, who plays the role of Gollum (a.k.a. 'Sméagol')?",
            answers: ["Clyde", "Tweek", "Butters", "Token"],
            correctAnswer: "Butters",
            image: "<img src='assets/images/q10.jpg' height='200px', width='300px'>"
        },
        {
            question: "In this sixth season episode, two new characters are introduced: Mr. Slave and Lemmiwinks the gerbil.",
            answers: ["Fun With Veal", "Red Hot Catholic Love", "Freak Strike", "The Death Camp of Tolerance"],
            correctAnswer: "The Death Camp of Tolerance",
            image: "<img src='assets/images/q11.jpg' height='200px', width='300px'>"
        },
        {
            question: "Jesus had a talk show called what?",
            answers: ["Jesus and Pals", "Jesus and Friends", "Jesus Talks", "Jesus Comes Again"],
            correctAnswer: "Jesus and Pals",
            image: "<img src='assets/images/q11.jpg' height='200px', width='300px'>"
        },
        {
            question: "Who performs the exorcism to remove Kenny's soul from Cartman's body?",
            answers: ["Native Americans", "Mr. Garrison", "Santa", "Chef's Mom"],
            correctAnswer: "Chef's Mom",
            image: "<img src='assets/images/q12.jpg' height='200px', width='300px'>"
        },
        {
            question: "Who is Eric Cartman's father?",
            answers: ["Jack Tenorman", "Chef", "Jimbo", "Mefesto"],
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
        }
    ]

//     select a question to start game
        // $("#qBox").beginGame();

        function beginGame() {
            $("#qBox").html("<h3> You have <span id='timeLimit>" + time + "</span> to get it right </h3>");
            theQuestion();
            timeLimit();
            outOfTime();
        }
        console.log(time)   

        function theQuestion() {
            $("#qBox").html("<p>" + questions[questionNumber].question + 
            "</p><p class='answers'>" + questions[questionNumber].answers[0] + 
            "</p><p class='answers'>" + questions[questionNumber].answers[1] + 
            "</p><p class='answers'>" + questions[questionNumber].answers[2] + 
            "</p><p class='answers'>" + questions[questionNumber].answers[3] + "</p>");
        }
        console.log(questionNumber, questions);


//     start a timer of 20 seconds

        function timeLimit(){
            counter = setInterval(countDown, 1000);
            
            function countDown(){
                if (time < 1){
                    clearInterval(counter);
                    outOfTime();
                }
                else if (time > 0) {
                    time--;
                }
                $("#qBox").html(time);
            }
        }
        console.log(time);

//     function for when correct - add point to correct score

        function win() {
            $("#qBox").html("<p>That's Right!</p>");
            rightAnswers++;
            let correctAnswer = questions[questionNumber].correctAnswer;
            $("#qBox").append("<p>The answer is" + correctAnswer + "</p>" + questions[questionNumber].image);
            setTimeout(nextQuestion, 4000);
            questionNumber++;
        }
        console.log(rightAnswers)

//     function when incorrect - add point to incorrect score

        function lose() {
            $("#qBox").html("<p>You Suck!</p>");
            wrongAnswers++;
            let correctAnswer = questions[questionNumber].correctAnswer;
            $("#qBox").append("<p>The answer is" + correctAnswer + "</p>" + questions[questionNumber].image);
            setTimeout(nextQuestion, 4000);
            questionNumber++;
        }
        console.log(wrongAnswers)
//     ran out of time - add point to incorrect score

        function outOfTime(){
            if (time === 0) {
                $("#qBox").html("<p>Are you slow in the head?</p>");
                wrongAnswers++;
                var correctAnswer = questions[questionCounter].correctAnswer;
                $("#qBox").append("<p>The answer is" + "</p>" + questions[questionNumber].image);
                setTimeout(nextQuestion, 4000);
                questionCounter++;
            }
        }
        console.log(questionNumber);

//     show if answer correct or incorrect after each question
//     once user select an answer, move to next question and restart timer

        function nextQuestion() {
            if (questionNumber < questions.length) {
                time = 20;
                $("#qBox").html("<h3> You have <span id='timeLimit>" + time + "</span> to get it right </h3>");
                theQuestion();
                timeLimit();
                outOfTime();
            }
            else {
                finishedGame();
            }
        }

//     allow user to choose an answer with click

        $("#qBox").on("click", ".answers", (function() {
            var userGuess = $(this).text();
            if (userGuess === questions[questionNumber].correctAnswer) {
                clearInterval(clock);
                win();
            }
            else {
                clearInterval(clock);
                lose();
            }
        }));
//     show user end-of-game screen with corrects, incorrects, and total score

        function finishedGame() {
            if (rightAnswer === questions.length) {
                let endMessage = "Wow, what a geek.";
            }
            else if (rightAnswer > wrongAnswers) {
                let endMessage = "Guess more are right than wrong";
            }
            else {
                let endMessage = "You SUUCCKK";
            }
            $("#qBox").html("<p> You got " + wins + "right. </p>" + "<br>" + "<p> You got " + lose + "wrong </p>");
            $("#qBox").append("<h2 id='start'> Play Again </2>");
            $("#resetGame").click(nextQuestion);
        }
        console.log(rightAnswers, wrongAnswers)

//     after last question reset game with a button (not refresh page)
//         reset scores
//         restart questions

        function restartGame() {
            let questionNumber = 0;
            let rightAnswers = 0;
            let wrongAnswers = 0;
        }
        console.log(questionNumber);
        console.log(rightAnswers);
        console.log(wrongAnswers);


})