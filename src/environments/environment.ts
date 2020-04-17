// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // LightingSystemSignlRHubUrl: 'http://192.168.0.138:5001/HomeLightSystemHub',
  // LightingSystemServiceUrl: 'http://192.168.0.138:5001/',
  // IdentityServerbaseUrl: 'https://homeautomationidentityservice20190519114609.azurewebsites.net/',
  LightingSystemSignlRHubUrl: 'https://lightingsystemapi20200320102759.azurewebsites.net/HomeLightSystemHub',
  IdentityServerbaseUrl: 'https://homeautomationidentityservice20190519114609.azurewebsites.net/',
  LightingSystemServiceUrl: 'https://lightingsystemapi20200320102759.azurewebsites.net/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
