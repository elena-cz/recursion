// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

    var type = typeof obj;
    
      if (['number', 'boolean', 'symbol'].indexOf(type) > -1) {
        return obj.toString();
      } 

        else if (type === 'string') {
          return '"' + obj + '"';
      }

        else if (obj === '') {
        return '';
      }

        else if (['function', 'undefined'].indexOf(type) > -1) {
        return '';
      } 

        else if (obj === null) {
        return 'null';
      } 

        else if (Array.isArray(obj)) {
          var arrString = obj.map(function(element) {
            return stringifyJSON(element);
          }).join(',');
          return  '[' + arrString + ']';
        } 
          else {
          var objStrings = [];
          for (var key in obj) {
            if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
              objStrings.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
            }
          }
          return '{' + objStrings.join(',') + '}';
      }

    };


console.log(stringifyJSON([1, 2, {'a': 3}, 'b']));
