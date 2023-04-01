function appFunctionThatUsesTheFeatureFlag(featureFlagKey) {
  if (featureFlagKey) {
    // I can use the feature flag key
  } else {
    // I can not use the feature flag key... handle error
  }
}