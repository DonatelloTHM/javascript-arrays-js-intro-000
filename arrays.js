var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array,element)
{
  var c=[element,...array];
  return c;
}
function accessElementInArray(a,b)
{
  return a[b];
}
function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}
function removeElementFromBeginningOfArray(a){
  a=a.slice(1);
  return a;
}
function destructivelyRemoveElementFromEndOfArray(a)
{
  a.pop();
  return a;
}
function removeElementFromEndOfArray(a){
  a=a.slice(0, a.length - 1);

}
function addElementToEndOfArray(a,b)
{
  a.push(b);
  return a;
}
function destructivelyAddElementToEndOfArray(a,b)
{
  var c=[...a,b];
  return c;
}
