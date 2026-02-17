const strings1 = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const strings2 = ["so today you are", "so tomorrow you will be", "so this month will be"];
const stringsa = ["pioneer", "beautifier", "communicator", "carer", "performer", "sharer", "delver", "soothsayer"];
const stringsan = ["improver", "explorer", "achiever", "iventor"];
const stringnone = ["active", "assertive", "impulsive", "solid", "patient", "indulgent", "lively", "logical", "inquisitive", "sensitive", "protective", "tenatious" ,"proud", "dramatic", "confident", "practical", "analytical", "meticulous", "balanced", "diplomatic", "cooperative", "passionate", "intense", "magnetic", "optimistic", "free-spirited", "philosophical", "responsible", "disciplined", "ambitious", "innovative", "unconventional", "analytical", "imaginative", "dreamy", "empathetic"];

function randomNum(num){
    return Math.round(Math.random() * num);
}

function generateRandomMessage(str1, str2, stra, stran, strnone){
    let third = randomNum(2);
    let end = "";

    if(third === 0){
        end = "a " + stra[randomNum(stra.length - 1)];
    }
    else if(third === 1){
        end = "an " + stran[randomNum(stran.length - 1)];
    }
    else{
        end = strnone[randomNum(strnone.length - 1)];
    }
    
    return "The stars align with " + str1[randomNum(str1.length - 1)] + " " + str2[randomNum(str2.length - 1)] + " " +  end + ".";
}

let message = generateRandomMessage(strings1, strings2, stringsa, stringsan, stringnone);
console.log(message);