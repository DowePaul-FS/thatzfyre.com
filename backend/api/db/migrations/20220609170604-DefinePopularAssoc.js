'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn("CategorysProducts", "PopularListId", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      references: {
        model: {
          tableName: 'PopularLists'
        },
        key: 'id'
      },
      allowNull: true
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn("CategorysProducts", "PopularListId")
  }
};
