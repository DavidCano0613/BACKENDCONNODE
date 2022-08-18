const { user } = require('pg/lib/defaults');

const {DataTypes , Sequelize, Model } = require('sequelize');

//*Construcción de un modelo (tabla)

//*Nombre de la tabla
const USER_TABLE = 'users';

//*Definición de la estructura de la tabla (esquema)
const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field:'created_at',
    defaultValue: Sequelize.NOW
    //*Nota: createdAt para manejar notación JS y field para que lo inserte en la base de datos con notación sql.
  },
};

//*Gracias a la extensión de este modelo tiene todas las formas de hacer queries

class User extends Model {
  //*static: Para acceder a metodos sin crear una instancia
  static associate(){
    //*Para relaciones
  }

  //Configuración por defecto
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE , UserSchema ,User}

