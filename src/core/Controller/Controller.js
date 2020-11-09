import { Router } from 'express';

import Method from './Method';

function Controller() {
  return function decorator(target) {
    target.router = Router();

    target._methods.forEach(({ method, path, fn }) => target.router[method](path, fn));
  };
}

Controller.Method = Method;

export default Controller;
