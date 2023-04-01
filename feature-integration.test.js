const axiosInstance = require('./utils/axios/axios-instance');
const setupFeatureIntegration = require('./utils/feature/feature-integration');

/*
This integration test tests that all the individual functions works (integrates) with each other.

*/

// Step 3 - Remove Test Resources
const removeTestResources = async (productId) => {
  return await axiosInstance
    .delete(`products/${productId}`)
    .then(() => console.log("Testing resources removed..."))
    .catch((error) => {
      throw new Error(error);
    });
};


test('should return an object containing a property key', async () => { 
  const data = await setupFeatureIntegration();
  expect(data).toHaveProperty("key");
  const { productId } = data;
  await removeTestResources(productId);
 })


