// Write your relation model here!
const BaseModel = require('./BaseModel')
const {BelongsToOneRelation} = require('objection')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }

    static get relationMappings() {
        const User = require('./User')
        return{
            child: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'relations.childId',
                    to: 'users.id',
                }
            },
            parent: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'relations.parentID',
                    to: 'users.id',
                }
            }
        }
    }
}

module.exports = Relation