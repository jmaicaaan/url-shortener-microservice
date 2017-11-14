import Sequelize from 'sequelize';
import { SequelService } from './sequel.service';
import { Url } from '../model/url';

class UrlService {
  _url;

  constructor() {
    const sequel = new SequelService().getInstance();
    this._url = sequel.define(Url.name, Url.attributes, Url.options);
  }

  addUrl = (originalUrl) => {
    if (originalUrl) {
      return this._url.findOrCreate({
        where: {
          original_url: originalUrl
        }
      }).spread((url) => url.dataValues);
    }
    throw 'No original URL or short URL passed';
  };

  findUrlById = (id) => {
    if (id) {
      return this._url.findOne({
        where: {
          id
        }
      }).then((data) => data);
    }
  };

  reset = () => {
    this._url.sync({ force: true });
  };
}

export { UrlService };