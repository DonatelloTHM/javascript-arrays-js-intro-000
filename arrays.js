var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(a,b)
{
  a.unshift(b);
  return a;
}
function destructivelyAddElementToBeginningOfArray(a,b)
{
  var c=[b,...a];
  return c;
}
