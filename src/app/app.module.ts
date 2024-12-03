import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Asegúrate de tener importado tu componente de login
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Asegúrate de declarar tu componente de login
  ],
  imports: [
    BrowserModule,
    FormsModule // Asegúrate de agregar FormsModule en imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
