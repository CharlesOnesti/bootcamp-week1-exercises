const BaseModel = require('./BaseModel')
const {HasManyRelation, ManyToManyRelation} = require('objection')

class User extends BaseModel {
  static get virtualAttributes() {
    return ['fullName']
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  
  static get tableName() {
    return 'users'
  }
  static get relationMappings() {
    const Pet = require('./Pet')
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      parent: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through:{
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        },
      },
      child: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through:{
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        }
      }
    }
  }
}

module.exports = User