const setupFeatureIntegration = require('./utils/feature/feature-integration');

test('should return an object containing a property key', async () => { 
  const data = await setupFeatureIntegration();
  expect(data).toHaveProperty("key");
 })