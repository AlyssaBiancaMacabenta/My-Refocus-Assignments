let caloriesPerHour = 450;
let numTimeSamCycles = 15;
let cycleHoursPerDay = 0.5;
let totalHoursCycling = numTimeSamCycles * cycleHoursPerDay;
let totalCaloriesBurned = caloriesPerHour * totalHoursCycling;
console.log(`Great Work, Sam! After ${cycleHoursPerDay} hours of running everyday in a week, you lose a total of ${totalCaloriesBurned} calories.`);