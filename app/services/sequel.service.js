import Sequelize from 'sequelize';

class SequelService {
  _sequel;

  constructor() {
    if (process.env.NODE_ENV == 'production') {
      this._sequel = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
          ssl: true
        }
      });
    } else {
      this._sequel = new Sequelize('fcc-url-ms', 'postgres', 'jmsantos17', {
        host: 'localhost',
        dialect: 'postgres'
      });
    }
  }

  getInstance = () => {
    return this._sequel;
  }
}

export { SequelService } 