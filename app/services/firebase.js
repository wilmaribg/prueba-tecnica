( function () {
  'use strict';



  angular
    .module( 'app' )
    .factory( 'firebaseConnect', firebaseFnc );

    function firebaseFnc () {
      'ngInject';

      var config = {
        apiKey: "AIzaSyD3pdrfryJ72C32AOquU8sLpYgzAUqliPs",
        authDomain: "qentektest.firebaseapp.com",
        databaseURL: "https://qentektest.firebaseio.com",
        storageBucket: "qentektest.appspot.com",
        messagingSenderId: "1082984311170"
      };

      var factory = {
        push: push,
        update: update,
        getAll: getAll,
        remove: remove
      };


      firebase.initializeApp(config);
      return factory;

      // function auth ( email, password ) {
      //   var result = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //   });
      //   cosnole.log(result)
      // }

      function push ( entity, data, callback ) {
        if ( ! data || ! entity ) return;
        firebase.database().ref( entity + '/' ).push( data )
          .then( function() {
            callback('ok');
          }, function() {
            callback('error');
          } );
      }

      function update ( entity, ref, model, callback ) {
        firebase.database().ref( entity + '/' + ref ).set( model )
          .then(function () {
            callback('ok');
          }, function () {
            callback('error');
          });
      }

      function remove ( entity, ref, callback ) {
        firebase.ref( entity + '/' + ref ).remove()
          .then( function() {
            callback('ok');
          }, function () {
            callback('error');
          } );
      }


      function getAll ( entity, limit, promise ) {
        var leadsRef = firebase.database().ref( entity ).limitToLast( limit );

        leadsRef.on('value', function(snapshot){
          var data = [];

          snapshot.forEach( function ( item ) {
            var local = {
              key:item.key,
              values:item.val()
            };

            data.push( local );
          } );

          promise( data );
        });
      }

    }

} )();
