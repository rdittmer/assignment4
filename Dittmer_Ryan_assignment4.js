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
  
  
  