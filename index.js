exports.getIssuer = function getIssuer(loaderContext) {
  return loaderContext._module.issuer;
};

exports.getResourcePath = function getResourcePath(loaderContext) {
  return loaderContext._module.resource;
};

exports.getIssuerContents = function getIssuerContents(loaderContext) {
  return loaderContext._module.issuer._source._value;
};

exports.getIssuerPath = function getIssuerPath(loaderContext) {
  return loaderContext._module.issuer.resource;
};

exports.getIssuerLineLocation = function getIssuerLineLocation(loaderContext) {
  return loaderContext._module.reasons[0].dependency.loc;
};
