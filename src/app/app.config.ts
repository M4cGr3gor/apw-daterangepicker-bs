import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ApwDaterangepickerBsModule } from '@apw-daterangepicker-bs';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		importProvidersFrom(ApwDaterangepickerBsModule.forRoot())
	]
};
