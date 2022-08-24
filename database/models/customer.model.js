const {Sequelize, DataTypes, Model } = require('sequelize')
const {USER_TABLE} = require('./user.model.js')
// const { models } = require('../../libs/sequelize.js');

const CUSTOMER_TABLE = 'customer';

const CustomerSchema = {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  lastname:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:'last_name'
  },
  phone:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  createdAt:{
    type:DataTypes.DATE,
    defaultValue:Sequelize.NOW,
    field:'created_at'
  },
  userId:{
    field:'user_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:'users',
      key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
  }
}

class Customer extends Model{
  static associate(models){
    this.belongsTo(models.User, {as:'user'});
}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }

}

module.exports = {CUSTOMER_TABLE,Customer,CustomerSchema}
