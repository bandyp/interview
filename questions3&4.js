// answer to question 3

var date_actioned;
var z = actions;
var x = start_time;
var y = end_time;
var records = [];

function getUsers(records, actions, x, y)   //user added variables
    for (z = records.action) {              //start of for loop to select user selected actions which match records array action
        if (records.date_actioned > x && < y)       //if the date_actioned in records array is greater then the strt time selected and less than the end time selected
            console.log(records.user_id);   //then show the user_id in the console
        else
            console.log("");                //otherwise show nothing
    }

//answer to question 4


function getPlaybackTime(user_id, records)
    for (records.user_id) {                 //for the user_id selected ...
        TotalTime = Math.max(date_actioned) - Math.min(date_actioned)   //...take the highest integer and subtract the lowest integer, to get the total time
        console.log(TotalTime);             // show the answer in the console
    }

