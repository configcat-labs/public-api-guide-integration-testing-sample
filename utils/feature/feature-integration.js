const axiosInstance = require('../axios/axios-instance');

// Step 1 - Create Product
const createTestProduct = async () => {
  const organizationId = "08da0156-fc5b-4132-88e5-1d42032078f5";
  return await axiosInstance
    .post(`organizations/${organizationId}/products`, {
      name: "Test Product",
      description: "A product for testing",
    })
    .then((response) => response.data)
    .catch((error) => {
      // throw new Error(error);
      console.log(error);
    });
};

// Step 2 - Create Test Environment
const createTestEnvironment = async (productId) => {
  return await axiosInstance
    .post(`products/${productId}/environments`, {
      name: "Test Environment",
      description: "An environment for testing",
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

// Step 3 - Create Test Config
const createTestConfig = async (productId) => {
  return await axiosInstance
    .post(`products/${productId}/configs`, {
      name: "Test Config",
      description: "An config for testing",
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

// Step 4 - Create Test Feature Flag
const createTestFeatureFlag = async (configId, environmentId) => {
  return await axiosInstance
    .post(`configs/${configId}/settings`, {
      hint: "A feature flag for testing",
      key: "testfeatureflag",
      name: "Test Feature Flag",
      settingType: "boolean",
      initialValues: [
        {
          environmentId: environmentId,
          value: true,
        },
      ],
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

async function setupFeatureIntegration() {
  try {
    const { productId } = await createTestProduct();
    const { configId } = await createTestConfig(productId);
    const { environmentId } = await createTestEnvironment(productId);
    const createTestFeatureFlagResponse = await createTestFeatureFlag(configId, environmentId);
    createTestFeatureFlagResponse.productId = productId;
    return createTestFeatureFlagResponse;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = setupFeatureIntegration;
