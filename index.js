function takeANumber(number, name)
{
 number.push(name)
  varar whatToReturn = ("Welcome, "  + name +  ". You are number "  + number.length +  " in line.");
  return whatToReturn
  
}

function nowServing(katzDeliLine)
{
  if ( katzDeliLine.length > 0)
  {
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return(firstInLine);
  }
  
  else
  {
    return ("There is nobody waiting to be served!")
  }
}