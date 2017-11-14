import Sequelize from 'sequelize';

const Url = {
  name: 'Url',
  attributes: {
    original_url: {
      type: Sequelize.STRING
    }
  },
  options: {
    freezeTableName: true, // avoid making the table name plural
    createdAt: false,
    updatedAt: false
  }
};

export { Url }