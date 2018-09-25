function takeANumber(number, name)
{
 number.push(name)
  var numberNumber = number.length;
  numberNumber++;
  var whatToReturn = ("Welcome, "  + name +  ". You are number "  + numberNumber +  " in line.");
  return whatToReturn
  
}

function nowServing()
{
  if ( katzDeliLine.length > 0)
  {
    return(katzDeliLine[0]);
  }
  
  else
  {
    return ("There is nobody waiting to be served!")
  }
}