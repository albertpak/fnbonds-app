import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bonds', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bonds');
    assert.ok(route);
  });
});
