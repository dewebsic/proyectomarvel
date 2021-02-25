// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hash: 'f66e500afad430f0b254d5c6c7053240',
  public_key: '3d9d760ca0b08c91db8459407159a917',
  api_url: `https://gateway.marvel.com:443/v1/public/`,
  firebaseConfig: {
    apiKey:  'AIzaSyCaguN4OEQbpmFxABmo_xqXE96-tvrlBvc',
    authDomain: 'marvel-d9f32.firebaseapp.com',
    projectId: 'marvel-d9f32',
    storageBucket: 'marvel-d9f32.appspot.com',
    messagingSenderId: '628577187034',
    appId: '1:628577187034:web:dbf0464da131706b32a1e3'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
