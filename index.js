const { Schema } = require('mongoose');
const mongoose = require('./db/mongoose');
Schema=mongoose.Schema;
var schema=new Schema({
   contact:{type:Number,required:true},
   email:{type:String,required:true}
});
var newinfo=mongoose.model('Info',schema);

await mongoose.createCollection(newinfo);
await mongoose.getAllCollection();
await mongoose.getCol1Documents();
await mongoose.getCol2Documents();
await mongoose.getCol3DocumentsbyId(id);
await mongoose.createCol1Documents({name:"Binod",age:30});
await mongoose.updateCol1Documents(id,{name:"Vikas",age:29});
await mongoose.deleteCol1Documents(id);
