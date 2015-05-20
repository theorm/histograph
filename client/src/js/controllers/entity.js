/**
 * @ngdoc function
 * @name histograph.controller:indexCtrl
 * @description
 * # IndexCtrl
 */
angular.module('histograph')
  .controller('EntityCtrl', function ($scope, $log, $routeParams, socket, entity, resources, persons, EntityVizFactory) {
    $log.debug('EntityCtrl ready', +$routeParams.id, entity.result.item.name);
    
    $scope.item = entity.result.item;
    $scope.related    = resources.result.items;
    $scope.relatedPersons    = persons.result.items;
    
    // cooccurrences
    
    // sync graph
    EntityVizFactory.get({
      id: $routeParams.id,
      viz: 'graph'
    }, {}, function(res) {
      res.result.graph.nodes.map(function (d) {
        d.color  = d.type == 'person'? "#D44A33": "#6891A2";
        d.type = d.type || 'res';
        d.x = Math.random()*50;
        d.y = Math.random()*50;
        d.label = d.name;
        return d;
      })
      $log.debug('EntityCtrl set graph',res.result.graph.nodes);
      
      // once done, load the other viz
      $scope.setGraph(res.result.graph)
    });
  });