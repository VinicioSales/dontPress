import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { ButtonComponent } from './components/button/button.component';
import { TextoComponent } from './components/texto/texto.component';
import { LightModeComponent } from './components/light-mode/light-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    ButtonComponent,
    TextoComponent,
    LightModeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
