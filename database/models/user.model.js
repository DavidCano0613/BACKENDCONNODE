const { user } = require('pg/lib/defaults');

const {Model , DataTypes , Sequelize} = require('sequelize');

//*Construcción de una tabla

//*Nombre de la tabla
const USER_TABLE = 'users';

//*Definición de la estructura de la tabla (esquema)
const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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

class User extends Model{
  //*Para acceder a metodos sin crear una instancia
  static associate(){
    //*Models
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

