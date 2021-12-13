let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 18;
if (registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18) {
  console.log(`Please you will start your race at 9:30 am and this is your raceNumber : ${raceNumber}`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Please you will start your race at 11:00 am and this is your raceNumber : ${raceNumber}`);
} else if (runnerAge < 18){
  console.log(`Please you will start your race at 12:30 pm and this is your raceNumber : ${raceNumber}`);
} else {
  console.log("PLease visit the registration desk");
}
