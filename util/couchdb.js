var nano = require('nano')('http://localhost:5984');

nano.destroyAll = function() {
  nano.db.list(function(err, body) {
  // body is an array
    body.forEach(function(database) {
      nano.db.destroy(database);
    });
  });
};

nano.listAll = function() {
  nano.db.list(function(err, body) {
    body.forEach(function(database) {
      console.log(database);
    });
  });
};

nano.hashCode = function(s){
  return s.split("").reduce(function(a,b) {
    a=((a<<5)-a)+b.charCodeAt(0);
    return a&a;
  },0);
};

// movies.insert({views: {foo: {map: viewFunc}}}, '_design/example', function(err, body, header) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('document has been inserted.');
//   console.log(body);
// });
//
// movies.view('example', 'foo', function(err, body) {
//   if (!err) {
//     body.rows.forEach(function(doc) {
//       console.log(doc.key + " : " + doc.value);
//     });
//   }
// });

module.exports = nano;
