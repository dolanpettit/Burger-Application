var orm = require("../config/orm");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (name, cb) {
    orm.insertOne("burgers", name, cb);
  },
  updateOne: function (id, cb) {
    orm.updateOne("burgers", id, cb);
  },
  deleteOne: function (id, db) {
    orm.deleteOne("burgers", id, cb);
  },
};

module.exports = burgers;
