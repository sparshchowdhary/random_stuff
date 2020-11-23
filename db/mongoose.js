var mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://dbWork:work78215@cluster0.lklvd.mongodb.net/dbWork?retryWrites=true&w=majority',
	{
		useUnifiedTopology : true,
		useNewUrlParser    : true
	}
);
let db = mongoose.connection;

db.once('open', () => console.log('Connected to the MongoDB database'));

//assuming student id is s07
db.createCollection('s07_col1',function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Collection 1 created');
    }
});
db.s07_col1.insert([
    {name:"Sparsh",age:24},
    {name:"Arvind",age:23}
]);
db.createCollection('s07_col2',function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Collection 2 created');
    }
});
db.s07_col2.insert([
    {profile:"Software Engineer",skills:"NodeJS"},
    {profile:"Web Developer",skills:"Javascript"}
]);
db.createCollection('s07_col3',function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Collection 3 created');
    }
});
db.s07_col3.insert([
    {college:"DTU",batch:2018},
    {name:"MAIT",batch:2020}
]);

async function createCollection(cname){
    db.createCollection('s07_colnew',function(err){
        if(err){
            console.log(err);
            return;
        }else{
            cname.create({contact:100,email:'xyz@mallinator.com'});
            console.log('New Collection created');
        }
    });        
}

async function getAllCollection(){
    db.on('open', function (ref) {
        db.listCollections().toArray(function (err, names) {
            if(err)console.log(err);
            console.log(names); 
        });
    });
}

async function getCol1Documents(){
    connection.db.collection('s07_col1', function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); 
        })
    });
}

async function getCol2Documents(){
    connection.db.collection('s07_col2', function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); 
        })
    });
}

async function getCol3DocumentsbyId(id){
    connection.db.collection('s07_col2', function(err, collection){
        collection.find({"_id":ObjectId(id)}).toArray(function(err, data){
            console.log(data); 
        })
    });
}

async function createCol1Documents(entry){
   db.s07_col1.insert(entry);
   getCol1Documents();
}

async function updateCol1Documents(id,entry){
    db.s07_col1.update({'_id':id},{$set:{'name':entry.name,'age':entry.age}});
}

async function deleteCol1Documents(id){
    db.s07_col1.remove({'_id':id});
}

module.exports = {
    mongoose,
    getAllCollection,
    createCollection,
    getCol1Documents,
    getCol2Documents,
    getCol3DocumentsbyId,
    createCol1Documents,
    updateCol1Documents,
    deleteCol1Documents
};