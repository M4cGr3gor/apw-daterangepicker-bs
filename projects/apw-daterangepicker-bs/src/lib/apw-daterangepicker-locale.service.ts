import { Inject, Injectable } from '@angular/core';
import {
	DefaultLocaleConfig,
	LOCALE_CONFIG,
	LocaleConfig
} from './apw-daterangepicker-locale.config';

@Injectable()
export class ApwDaterangepickerLocaleService {
	get config() {
		if (!this._config) {
			return DefaultLocaleConfig;
		}

		return { ...DefaultLocaleConfig, ...this._config };
	}

	constructor(@Inject(LOCALE_CONFIG) private _config: LocaleConfig) {}
}
