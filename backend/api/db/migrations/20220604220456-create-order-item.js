'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Items', {
      order_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      product_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_Items');
  }
};