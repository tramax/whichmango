angular.module( 'whichmango.services', [] )

.factory('Groups', function() {
  var groupList = [
    {
      id: 1,
      name: "Mango 2359",
      joined: true,
      imageUrl: "http://lorempixel.com/50/50/abstract/1"
    },
    {
      id: 2,
      name: "Movie Club",
      joined: true,
      imageUrl: "http://lorempixel.com/50/50/abstract/2"
    },
    {
      id: 3,
      name: "Early Morning Badminton",
      joined: true,
      imageUrl: "http://lorempixel.com/50/50/abstract/3"
    },
    {
      id: 11,
      name: "2359 Dinner",
      joined: false,
      imageUrl: "http://lorempixel.com/50/50/abstract/4"
    },
    {
      id: 12,
      name: "WWDC",
      joined: false,
      imageUrl: "http://lorempixel.com/50/50/abstract/5"
    },
    {
      id: 13,
      name: "Avengers",
      joined: false,
      imageUrl: "http://lorempixel.com/50/50/abstract/6"
    }
  ];

  var groupEvents = [
    {
      id: 21,
      name: "Badminton Week 20",
      date: "Mon Jun 22, 2015",
      time: "8 AM - 10 AM",
      location: "SAFRA Mount Faber, 2 Telok Blangah Way, Singapore 098803",
      question: {
        title: "Are You Going?",
        maybeAllowed: true,
        answer: 0
      }
    },
    {
      id: 22,
      name: "Mad Max Movie",
      date: "Wed Jun 23, 2015",
      time: "1 PM - 5 PM",
      location: "9 Jalan Rumah Tinggi, 12-455, Singapore 150009",
      question: {
        title: "A Must See?",
        maybeAllowed: false,
        answer: 1
      }
    },
    {
      id: 23,
      name: "Video Game Outing",
      date: "Thur Jun 25, 2015",
      time: "4 PM - 9 PM",
      location: "Vivo City, 4-12, Singapore 189982",
      question: {
        title: "Are You Joining Us Or Not?",
        maybeAllowed: true,
        answer: 2
      }
    },
    {
      id: 24,
      name: "2359 Hackathon 2015",
      date: "Mon Aug 29, 2015",
      time: "4 PM - 9 PM",
      location: "10 Anson Road, 23-01, Singapore 098871",
      question: {
        title: "Is It Good For You?",
        maybeAllowed: true,
        answer: 0
      }
    },
    {
      id: 25,
      name: "Lorem accusantium maxime",
      date: "Mon Aug 30, 2015",
      time: "9 PM - 11 PM",
      location: "78 Clementi Ave 2, 18-09, Singapore 001222",
      question: {
        title: "I'll Be Seeing You On This Day Right?",
        maybeAllowed: true,
        answer: 3
      }
    }
  ];

  return {
    all: function() {
      return groupList;
    },
    get: function(groupId) {
      for (var i = 0; i < groupList.length; i++) {
        if (groupList[i].id === parseInt(groupId,10)) {
          return groupList[i];
        }
      }
      return null;
    },
    getEvents: function(groupId) {
      return groupEvents;
    }
  };

})

.factory('Events', function() {
  var events = [
    {
      id: 21,
      name: "Badminton Week 20",
      date: "Mon Jun 22, 2015",
      time: "8 AM - 10 AM",
      location: "SAFRA Mount Faber, 2 Telok Blangah Way, Singapore 098803",
      groupName: "2359 Badminton",
      question: {
        title: "Are You Going?",
        maybeAllowed: true,
        answer: 0
      }
    },
    {
      id: 22,
      name: "Mad Max Movie",
      date: "Wed Jun 23, 2015",
      time: "1 PM - 5 PM",
      location: "9 Jalan Rumah Tinggi, 12-455, Singapore 150009",
      groupName: "Movie Club",
      question: {
        title: "A Must See?",
        maybeAllowed: false,
        answer: 1
      }
    },
    {
      id: 23,
      name: "Video Game Outing",
      date: "Thur Jun 25, 2015",
      time: "4 PM - 9 PM",
      location: "Vivo City, 4-12, Singapore 189982",
      groupName: "2359 Badminton",
      question: {
        title: "Are You Joining Us Or Not?",
        maybeAllowed: true,
        answer: 2
      }
    },
    {
      id: 24,
      name: "2359 Hackathon 2015",
      date: "Mon Aug 29, 2015",
      time: "4 PM - 9 PM",
      location: "10 Anson Road, 23-01, Singapore 098871",
      groupName: "2359 Hackathon",
      question: {
        title: "Is It Good For You?",
        maybeAllowed: true,
        answer: 0
      }
    },
    {
      id: 25,
      name: "Lorem accusantium maxime",
      date: "Mon Aug 30, 2015",
      time: "9 PM - 11 PM",
      location: "78 Clementi Ave 2, 18-09, Singapore 001222",
      groupName: "2359 Badminton",
      question: {
        title: "I'll Be Seeing You On This Day Right?",
        maybeAllowed: true,
        answer: 3
      }
    }
  ];

  var calendar = [
    {
      id: 26,
      name: "Lorem accusantium maxime",
      date: "Mon Aug 30, 2015",
      time: "9 PM - 11 PM",
      location: "78 Clementi Ave 2, 18-09, Singapore 001222",
      groupName: "2359 Badminton",
      attend: true
    },
    {
      id: 27,
      name: "Badminton Week 20",
      date: "Mon Aug 30, 2015",
      time: "8 AM - 10 AM",
      location: "SAFRA Mount Faber, 2 Telok Blangah Way, Singapore 098803",
      groupName: "2359 Badminton",
      attend: true
    },
    {
      id: 28,
      name: "Mad Max Movie",
      date: "Wed Jun 23, 2015",
      time: "1 PM - 5 PM",
      location: "9 Jalan Rumah Tinggi, 12-455, Singapore 150009",
      groupName: "Movie Club",
      attend: false
    },
    {
      id: 29,
      name: "Video Game Outing",
      date: "Thur Jun 25, 2015",
      time: "4 PM - 9 PM",
      location: "Vivo City, 4-12, Singapore 189982",
      groupName: "2359 Badminton",
      attend: true
    },
    {
      id: 30,
      name: "2359 Hackathon 2015",
      date: "Thur Jun 25, 2015",
      time: "4 PM - 9 PM",
      location: "10 Anson Road, 23-01, Singapore 098871",
      groupName: "2359 Hackathon",
      attend: false
    }
  ];

  return {
    all: function() {
      return events;
    },
    getCalendar: function(userId) {
      return calendar;
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId,10)) {
          return events[i];
        }
      }
      return null;
    }
  };

});