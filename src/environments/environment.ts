// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
//  HomeSystemSignlRHubUrl: 'https://localhost:5003/HomeSystemHub',
 HomeSystemSignlRHubUrl: 'https://homeautomationsignalr20210407210041.azurewebsites.net/HomeSystemHub',
 //LightingSystemServiceUrl: 'https://localhost:5001/',
  LightingSystemServiceUrl: 'https://homeautomationlightingsystemapi20210403203211.azurewebsites.net/',
  // LightingSystemSignlRHubUrl: 'https://lightingsystemapi20200320102759.azurewebsites.net/HomeLightSystemHub',
  // LightingSystemServiceUrl: 'https://lightingsystemapi20200320102759.azurewebsites.net/',
  //  LightingSystemSignlRHubUrl: 'https://homeautomationlightapi.azurewebsites.net/HomeLightSystemHub',
  // LightingSystemServiceUrl: 'https://homeautomationlightapi.azurewebsites.net/',
  IdentityServerbaseUrl: 'https://homeautomationidentityservice20190519114609.azurewebsites.net/',
  // IdentityServerbaseUrl: 'https://homeautomationidentityservice20190519114609.azurewebsites.net/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
