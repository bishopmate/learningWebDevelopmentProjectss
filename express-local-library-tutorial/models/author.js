var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name : { type : String, required : true, maxLength : 30},
    last_name : {type : String, required : true, maxLength : 30},
    date_of_birth : { type : Date},
    date_of_death : { type : Date}
  }
);

AuthorSchema
  .virtual('full_name')
  .get(function (){
    return this.first_name + ' ' + this.last_name;
  });

AuthorSchema
  .virtual('lifespan')
  .get(function(){
    reutrn (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
  });

AuthorSchema
  .virtual('url')
  .get(function(){
    return '/catalog/author/' + this._id;
  });

module.exports = mongoose.model('Author', AuthorSchema);

