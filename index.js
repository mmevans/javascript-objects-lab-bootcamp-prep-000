var recipes = {};

function updateObjectWithKeyAndValue(recipes, eggs, one) {
  
  return Object.assign({}, recipes, {[eggs]: one});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, flour, two) {
  recipes[flour] = two;
  
  return recipes
}
  
function deleteFromObjectByKey(recipes, flour) {
  var newRecipe = Object
}