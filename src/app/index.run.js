(function() {
  'use strict';

  angular
    .module('angularUiRouterPlay')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
