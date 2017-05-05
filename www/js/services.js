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
    },

    //AJOUT
    create: function(data){
      var id = events.length + 1;
      events[id] = data;
    },
    update : function(id, data){
      events[id] = data;
    },
    delete : function(id){
      delete events[id];
    }
  };
})

.factory('Helps', function() {

  //Contenu des pages
  var helps = [{
    id: 1,
    titre: 'Utilité colonnes de Beck',
    contenu: 'Les colonnes de Beck n\'est pas un outil qui fait disparaître toutes les ' + 
    'contrariétés de la vie. En revanche, elle permet de rationaliser l\'approche que l\'on ' + 
    'peut en avoir. Très souvent, cette technique conduit à une nette amélioration de l\'humeur ' + 
    'de la personne par rapport à une situation donnée. ' +
    'C\'est une technique à utiliser sans modération. En effet, si des distorsions cognitives répétées ' + 
    'peuvent rapidement conduire à la dépression, la rationalisation ne peut, quand à elle, avoir que des ' +
    'effets bénéfiques sur l\'humeur des utilisateurs et leur manière d\'appréhender leurs problèmes.'
  },
  {
    id: 2,
    titre: 'Origines colonnes de Beck',
    contenu: 'C`\'est la technique utilisé par Aron Beck en 1979 qui permet de mettre en évidence les pensées ' + 
    'dysfonctionnelles des patients afin de les aider à mieux les analyser. Ces pensées dysfonctionnelles ' + 
    'entraînent des actes ou des croyances inadaptés.'
  }];

  return {
    all: function() {
      return helps;
    },
    remove: function(help) {
      helps.splice(helps.indexOf(help), 1);
    },
    get: function(helpId) {
      for (var i = 0; i < helps.length; i++) {
        if (helps[i].id === parseInt(helpId)) {
          return helps[i];
        }
      }
      return null;
    },
  };
});