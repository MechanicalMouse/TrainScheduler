const trains = [];

$("#addTrain").on("click", function (event) {
    event.preventDefault()
    var nextArrivalTime;
    var minutesAway;

    const train = {
        name: $("#nameInput").val().trim(),
        destination: $("#destInput").val().trim(),
        firstTrainTime: $("#timeInput").val().trim(),
        frequency: $("#freqInput").val().trim()
    }
    let currentTime = moment();
    let firstTime = moment(train.firstTrainTime, 'HH:mm');

    let nextTime = firstTime;

    while(currentTime.isAfter(firstTime)){
        nextTime = nextTime.add(train.frequency, 'm');
        console.log(nextTime);
    }

    const newTrain = {
        trainName: name,
        destination: destination,
        trainTime: firstTrainTime,
        frequency: frequency,
        nextArrival: nextArrivalTime,
        minutesAway: minutesAway
    }

    train.nextArrivalTime = nextTime.format('HH:mm');
    train.minutesAway = parseInt(moment.duration(nextTime.diff(currentTime)).asMinutes());

    trains.push(train);
    console.log(trains);

    localStorage.setItem("trainSchedule", JSON.stringify(trains));
    createRow(newTrain);
});

function createRow(trainObj) {
    
    const tRow = $("<tr>");
    const trainNa = $("<td>").text(trainObj.trainName);
    tRow.append(trainNa);
    const dest = $("<td>").text(trainObj.destination);
    tRow.append(dest);
    const freqTime = $("<td>").text(trainObj.frequencyTime);
    tRow.append(freqTime);
    const trainSchedule = $("<td>").text(trainObj.nextArrival);
    tRow.append(trainSchedule);
    const minutesAway = $("<td>").text(trainObj.minutes);
    tRow.append(minutesAway);

    
    $("tBody").append(tRow);
}