import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app/app.component';
import { TextOverflowDirective } from './directive/text-overflow.directive';
import { TooltipComponent } from './component/tooltip/tooltip.component';
import { TextOverflowTooltipDirective } from './directive/text-overflow-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextOverflowDirective,
    TooltipComponent,
    TextOverflowTooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
