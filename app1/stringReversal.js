const reverseString = (strArgs)=>
{  
     let reversedString = "";
   if(strArgs.length != 0)
   { 
	   for(count= strArgs.length-1 ; count >= 0 ; count--)
		{
	          reversedString += strArgs[count];
		}

	    if(reversedString === strArgs)
	    	 return true;
	    else 
	    	 return reversedString;
   }
   
   else 
      return null; 	
}

exports.reverseString = reverseString ;