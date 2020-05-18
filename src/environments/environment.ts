// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
}
export class GitHttpService {
  
  username:string;
  apiUrl:'https://api.github.com/users/'
  client_id = '4ab04b8d16fb7f3f4b4e94e00113090419fcb3be'
  client_secret = '4ab04b8d16fb7f3f4b4e94e00113090419fcb3be'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
