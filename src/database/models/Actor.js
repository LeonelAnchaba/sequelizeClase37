module.exports = (sequelize, dataTypes) => {
    const alias = "Actor";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        created_At: {
            type:dataTypes.DATE
        },
        updated_At: {
            type:dataTypes.DATE
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: true,
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER,
            unsigned: true
        }

    };
    const config = {
        tableName : "actors",
        timestamps: false
    };

    const Actor = sequelize.define(alias,cols,config)

    Actor.associate = function(models) {
        Actor.belongsTo(models.Movie, {
            as: "movie",
            foreignKey: "favorite_movie_id"
        })
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }

    return Actor
}