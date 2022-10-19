function rollDice()
    {
        let numInput = document.getElementById("userNumInput").value;
        let genNum = Math.floor(Math.random() * numInput) + 1;
                
        if (numInput == "")
        {
            alert("please enter a number");
        }
        else 
        if (numInput < 1)
        {
            alert("input must be 1 or higher");
        }
        else
        {
            document.getElementById("numGen").value = genNum;
        }
    }
