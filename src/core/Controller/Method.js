export default (method, path) => {
  return function decorator(target, key, descriptor) {
    target._methods = [...(target._methods || []), { method, path, fn: descriptor.value }];
    return descriptor;
  };
};
