// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
 var bodyElements = document.body;
  var classElements = [];

  var getElements = function(node) {
    var nodeClassName = node.className;
    if (nodeClassName !== undefined && nodeClassName.indexOf(className) > -1) {
      classElements.push(node);
    }

    if (!node.hasChildNodes) {
        return;
    } else {
      node.childNodes.forEach(function(item) {
        return getElements(item);
      });
    }
  };
  
  getElements(bodyElements);
  
  return classElements;

};

