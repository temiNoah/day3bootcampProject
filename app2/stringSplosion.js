function StringSplosion (strArg)
{
   this.strToBeSpl=strArg;

   return this;
}


StringSplosion.prototype.manipulate = function()
{
	     return this.removeLastChar (this.strToBeSpl ) ;
}
StringSplosion.prototype.removeLastChar=function(strA)
{

	let resultantStr="";

	if(strA.length === 0)
		return strA;
	else
	{
	    for(count=0; count< strA.length-1 ; count++)
		     resultantStr += strA[count];

	     return this.removeLastChar (resultantStr) + strA;
    }
}
exports.StringSplosion=StringSplosion;