import { introHandler, urlShortenerHandler, redirectUrlHandler } from './handlers/index';

export function routes(app) {
  app.get('/', introHandler);
  app.get('/url?:url', urlShortenerHandler);
  app.get('/url/:id', redirectUrlHandler);
};