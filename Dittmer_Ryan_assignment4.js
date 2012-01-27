/*Ryan Dittmer  
  01/19/2012    
  Deliverable 4 
  Library  */
  

  //Replaces the first separator in the given string with the second separator
  function replaceSeparator( string, firstSep, secondSep )
  {
    for ( var i = 0; i < string.length; ++i )
  	{
  		if ( string.charAt( i ) == firstSep )
  		{
  			string = string.replace( firstSep, secondSep );
  		}
  	}
  	console.log(string);
  	return string;
  }
  
	
  //Formats a number to a fixed amount of decimal places	
  function formatDecimal( number, numDecPlaces )
  {
  	number = number.toFixed( numDecPlaces );
  	return number;
  }
  

  //Turns a string into a number
  function stringToNumber( string )
  {
  	var number;
  	
  	number = parseFloat( string );
  	return number;
  }
  

  //Returns true if string follows 123-456-7890 pattern, else false
  function isPhoneNumber( string )
  {
  	if ( string.charAt( 3 ) == "-" && string.charAt( 7 ) == "-" && string.length == 12 )
  		return true;
  	else
  		return false;
  }
  
  
  //Returns true if string begins with 'http:' or 'https:'
  function isURL( string )
  {
  	var substr1;
  	var substr2;
  	
  	substr1 = string.substr( 0, 5 );
  	substr2 = string.substr( 0, 6 );
  	
  	if ( substr1 == "http:" || substr2 == "https:" )
  		return true;
  	else
  		return false;
  }
  
  
  //Returns true if string is in an email format, ie: aaa@bbb.ccc
  function isEmail( string )
  {
  	var hasDot = false;
  	
  	if ( string.charAt( string.length-4 ) == '.' )
  		hasDot = true;
  	
  	if ( string.indexOf( "@" ) != -1 && hasDot == true )
  		return true;
  	else
  		return false;
  }
  
  
  