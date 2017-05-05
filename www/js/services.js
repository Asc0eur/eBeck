angular.module('starter.services', [])

.factory('Events', function() {

  //Fausses donnees pour tester
  var events = [{
    id: 1,
    titre: 'Pas cours de la journée',
    date: '05/05/17',
    heure: '08h12',
    emotion: 'Content',
    ressenti: 'Ceci est un test'
  },
  {
    id: 2,
    titre: 'Conduite',
    date: '05/05/17',
    heure: '17h00',
    emotion: 'Stressé',
    ressenti: 'Premières heures de conduite, stress'
  },
  {
    id: 3,
    titre: 'Développement d\'application',
    date: '06/05/17',
    heure: '00h45',
    emotion: 'Fatigué',
    ressenti: 'Développement du projet innovant'
  }];

  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
});
