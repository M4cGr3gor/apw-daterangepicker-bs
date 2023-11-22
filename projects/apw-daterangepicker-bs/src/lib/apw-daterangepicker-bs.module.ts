import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApwDaterangepickerBsComponent } from './apw-daterangepicker-bs.component';
import { ApwDaterangepickerBsDirective } from './apw-daterangepicker-bs.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	LOCALE_CONFIG,
	LocaleConfig
} from './apw-daterangepicker-locale.config';
import { ApwDaterangepickerLocaleService } from './apw-daterangepicker-locale.service';

@NgModule({
	declarations: [ApwDaterangepickerBsComponent, ApwDaterangepickerBsDirective],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [ApwDaterangepickerBsComponent, ApwDaterangepickerBsDirective]
})
export class ApwDaterangepickerBsModule {
	static forRoot(
		config: LocaleConfig = {}
	): ModuleWithProviders<ApwDaterangepickerBsModule> {
		return {
			ngModule: ApwDaterangepickerBsModule,
			providers: [
				{ provide: LOCALE_CONFIG, useValue: config },
				{
					provide: ApwDaterangepickerLocaleService,
					useClass: ApwDaterangepickerLocaleService,
					deps: [LOCALE_CONFIG]
				}
			]
		};
	}
}
