function takeANumber(line, name)
{
 line.push(name)
  var whatToReturn = ("Welcome, "  + name +  ". You are number "  + line.length +  " in line.");
  return whatToReturn
  
}

function nowServing(katzDeliLine)
{
  if ( katzDeliLine.length > 0)
  {
    var firstInLine = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return firstInLine;
  }
  
  else
  {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(line)
{
  if(line.length > 0){
    var newArray = []
    
  }
  
  else{
    return ("The line is currently empty.")
  }
  
}