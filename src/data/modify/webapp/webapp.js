'use strict';

var background = {
  send: function (id, msg) {
    id += '@md';
    window.top.postMessage({id, msg}, '*');
  },
  receive: function (id, callback) {
    id += '@md';
    window.addEventListener('message', function (e) {
      if (e.data && e.data.id === id) {
        callback(e.data.msg);
      }
    }, false);
  }
};
