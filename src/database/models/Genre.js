module.exports = (sequelize, dataTypes) => {
    const alias = "Genre";
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
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            unsigned: true
        },
        active: {
            type: dataTypes.TINYINT(1),
            allowNull: false
        }

    };
    const config = {
        tableName : "genres",
        timestamps: false
    };

    const Genre = sequelize.define(alias,cols,config)
    return Genre
}