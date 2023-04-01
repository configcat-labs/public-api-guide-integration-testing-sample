const axiosInstance = require('./utils/axios/axios-instance');
const setupFeatureIntegration = require('./utils/feature/feature-integration');

// Remove Test Resources
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


