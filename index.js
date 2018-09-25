function takeANumber(number, name)
{
 number.push(name)
  var whatToReturn = ("Welcome, "  + name +  ". You are number "  + number.length +  " in line.");
  return whatToReturn
  
}

function nowServing(katzDeliLine)
{
  if ( katzDeliLine.length > 0)
  {
    var firstInLine = "currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return firstInLine;
  }
  
  else
  {
    return ("There is nobody waiting to be served!")
  }
}