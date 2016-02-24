var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
//Query for All Documents in a Collection
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});
//Specify Equality Conditions
//1. Query by a Top Level Field
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "borough": "Manhattan" } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});
//2. Query by a Field in an Embedded Document
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "address.zipcode": "10075" } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});
//3. Query by a Field in an Array
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "grades.grade": "B" } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});
//Specify Conditions with Operators
//1. Greater Than Operator ($gt)
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "grades.score": { $gt: 30 } } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});
//2. Less Than Operator ($lt)
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "grades.score": { $lt: 10 } } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});
//Combine Conditions
//1. Logical AND
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find(
     { "cuisine": "Italian", "address.zipcode": "10075" }
   );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

//2. Logical OR
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find(
       { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
   );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

//Sort Query Results
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find().sort( { "borough": 1, "address.zipcode": 1 } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});
