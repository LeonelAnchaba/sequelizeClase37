module.exports = (sequelize, dataTypes) => {
    const alias = "Movie";
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
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false,
            unsigned: true
        },
        awards: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unsigned: true
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: true
        },
        genre_id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: true
        }
    };
    const config = {
        tableName : "movies",
        timestamps: false
    };

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genre, {
            as: "genres",
            foreignKey: "genre_id"
        })
        Movie.associate = function(models) {
            Movie.belongsToMany(models.Actor, {
                as: "actors",
                through: "actor_movie",
                foreignKey: "movie_id",
                otherKey: "actor_id",
                timestamps: false
            })
        }
    }


    return Movie
}