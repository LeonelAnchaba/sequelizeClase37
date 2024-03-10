module.exports=(sequelize,dataTypes)=>{
    let alias = "Actor_movie";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        created_At: {
            type:dataTypes.DATE
        },
        updated_At: {
            type:dataTypes.DATE
        },
        actor_id: {
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        movie_id: {
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        }
    }
    let config={
        tableName:"actor_movie",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Actor_movie = sequelize.define(alias,cols,config)

    return Actor_movie
}