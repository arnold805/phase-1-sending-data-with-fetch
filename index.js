function submitData( name, email ) {
    // send data
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
    // handle response
      .then( function ( response ) {
        return response.json()
      } )
    // retrieves the new id value and appends it to the DOM
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
    // handle errors
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }