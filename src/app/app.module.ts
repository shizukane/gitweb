import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitHomeComponent } from './git-home/git-home.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepohighlightDirective } from './repohighlight.directive';
import { MyCustomPipePipe } from './my-custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitHomeComponent,
    GitsearchComponent,
    NavbarComponent,
    NotFoundComponent,
    RepohighlightDirective,
    MyCustomPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
