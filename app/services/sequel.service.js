import Sequelize from 'sequelize';

class SequelService {
  _sequel;

  constructor() {
    this._sequel = new Sequelize('fcc-url-ms', 'postgres', 'jmsantos17', {
      host: 'localhost',
      dialect: 'postgres'
    });
  }

  getInstance = () => {
    return this._sequel;
  }
}

export { SequelService } 