var oxygenLevel = 50

function isOxygenLevelNormal(oxygenLevel) {
    if (oxygenLevel >=96){
        console.log("Normal Reading.");
    } else if ((oxygenLevel<96) && (oxygenLevel>=95)){
         console.log("Acceptable to continue home monitoring.");
    } else if ((oxygenLevel<=94) && (oxygenLevel>=93)){
         console.log("Seek advice from health professionals.");
    } else if (oxygenLevel <=92){
         console.log("Seek urgent medical advice.");
    }
}
isOxygenLevelNormal(oxygenLevel)