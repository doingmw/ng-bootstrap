import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NGB_CAROUSEL_DIRECTIVES, NgbSlideCarouselEvent} from './carousel';
import {NgbCarouselConfig} from './carousel-config';

export {NgbCarousel, NgbSlide, NgbSlideCarouselEvent} from './carousel';
export {NgbCarouselConfig} from './carousel-config';

@NgModule({declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [CommonModule]})
export class NgbCarouselModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbCarouselModule, providers: [NgbCarouselConfig]}; }
}
