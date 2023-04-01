const featureIntegration = require('./feature-integration');

test('should return pass', () => { 
  expect(featureIntegration()).toBe('pass');
 })