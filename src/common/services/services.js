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
        maybeAllowed: true
      }
    },
    {
      id: 22,
      name: "Mad Max Movie",
      date: "Wed Jun 23, 2015",
      time: "1 PM - 5 PM",
      location: "9 Jalan Rumah Tinggi, 12-455, Singapore 150009",
      question: {
        title: "Are You Going?",
        maybeAllowed: false
      }
    },
    {
      id: 23,
      name: "Video Game Outing",
      date: "Thur Jun 25, 2015",
      time: "4 PM - 9 PM",
      location: "Vivo City, 4-12, Singapore 189982",
      question: {
        title: "Are You Going?",
        maybeAllowed: true
      }
    },
    {
      id: 24,
      name: "2359 Hackathon 2015",
      date: "Mon Aug 29, 2015",
      time: "4 PM - 9 PM",
      location: "10 Anson Road, 23-01, Singapore 098871",
      question: {
        title: "Are You Going?",
        maybeAllowed: true
      }
    },
    {
      id: 25,
      name: "Lorem accusantium maxime",
      date: "Mon Aug 30, 2015",
      time: "9 PM - 11 PM",
      location: "78 Clementi Ave 2, 18-09, Singapore 001222",
      question: {
        title: "Are You Going?",
        maybeAllowed: true
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
      for (var i = 0; i < groupList.length; i++) {
        if (groupList[i].id === parseInt(groupId,10)) {
          return groupList[i];
        }
      }
      return null;
    }
  };

});