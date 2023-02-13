import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { YourBooksComponent } from './your-books/your-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    NavmenuComponent,
    HomeComponent,
    YourBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
