let myMeetings = {
    day: 'Monday',
    totalMeetings: 0,
    done: 0,
}

let addMeetings = function (meetingsObj, meet) {
    meetingsObj.totalMeetings = meetingsObj.totalMeetings + meet;
}
let meetingsDone = function (meetingsObj, meet) {
    meetingsObj.done = meetingsObj.done + meet;
}
let meetingsLeft = function (meetingsObj) {
    var meetLeft = meetingsObj.totalMeetings - meetingsObj.done;
    console.log(meetLeft);
    return meetLeft; 
}
addMeetings(myMeetings, 10);
meetingsDone(myMeetings, 3);
//meetingsLeft(myMeetings);
let summary = function (meetingsObj) {
    console.log('Meetings:- ' + meetingsObj.totalMeetings + '\n Done:- ' + meetingsObj.done + '\n Left:- ' + meetingsLeft(myMeetings));

}


summary(myMeetings);
