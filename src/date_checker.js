let date = "2017-09-10T04:00:00.000Z"
let mydate = {
  year: 2017,
  month: 8,
  date: 10
};

function date_checker(date, mydate) {
  let d = new Date(date)
  if(mydate.year === d.getFullYear()
      && mydate.month === d.getMonth()
      && mydate.date === d.getDate()
    ) {
    return true
  } else {
    return false
  };
}

// console.log(date_checker(date, mydate));


var events = [
      {
        id: 1,
        artist_name: 'John Moreland',
        times: '7pm',
        date: '2017-09-10T04:00:00.000Z'
      },
      {
        id: 2,
        artist_name: 'Steelism',
        times: '7pm',
        date: '2017-09-11T04:00:00.000Z'
      },
      {
        id: 3,
        artist_name: 'Daniel Romano',
        times: '7pm',
        date: '2017-09-12T04:00:00.000Z'
      },
      {
        id: 4,
        artist_name: 'Valerie June',
        times: '8pm',
        date: '2017-09-13T04:00:00.000Z'
      },
      {
        id: 5,
        artist_name: 'The Secret Sisters',
        times: '7pm',
        date: '2017-10-01T04:00:00.000Z'
      }
    ];

function getEventsForDate(events, mydate) {
  let eventArray = [];
  for (let i = 0; i < events.length; i++) {
    if (date_checker(events[i].date, mydate)) {
      eventArray.push(events[i]);
    }
  }
  console.log(eventArray);
  return eventArray;
}

getEventsForDate(events, mydate);
