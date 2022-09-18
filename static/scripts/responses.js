function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "Paper";
    } else if (input == "paper") {
        return "Scissor";
    } else if (input == "scissor") {
        return "Rock";
    }
    else if (input=="Heart clicked!") {
        return "You are great too"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Valid input not found";
    }
    
}