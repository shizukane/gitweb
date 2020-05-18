import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { GitHomeComponent } from './git-home/git-home.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHttpService } from './git-httpservice.service';
import { MyCustomPipePipe } from './my-custom-pipe.pipe';
import { RepohighlightDirective } from './repohighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    GitHomeComponent,    
    NavbarComponent,
    NotFoundComponent,
    MyCustomPipePipe,
    RepohighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }