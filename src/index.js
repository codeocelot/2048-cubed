import Manager from './manager';
import Controller from './controller';
import Renderer from './renderer';

new Manager(Renderer, Controller, {
  epicLevel: 1
});
