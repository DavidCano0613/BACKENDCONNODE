const {DataTypes , Sequelize, Model } = require('sequelize');

//*Construcción de un modelo: representación de una tabla)

//*1) Nombre de la tabla
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
    defaultValue: Sequelize.NOW,
    allowNull: false,
    field:'created_at',
    //*Nota: createdAt para manejar el naming JS y field para que lo inserte en la base de datos con notación sql.
  },
  role:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:'Customer'
  }
};

//*Gracias a la extensión del Model padre, este modelo tiene todas las formas de hacer queries.

class User extends Model {
  //*static: Para acceder a metodos sin crear una instancia.

  //*Configuración por defecto(Vamos a recibir una conexión y vamos a retornar una configuración con el nombre de la tabla y el nombre del modelo).

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }

  static associate() {
    //*Para todas las relaciones
  }

}

module.exports = { USER_TABLE , UserSchema ,User }

