import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './services/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingletonExampleComponent } from './components/singleton-example/singleton-example.component';
import { FactoryComponent } from './components/factory/factory.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { BuilderComponent } from './components/builder/builder.component';
import { PersonBuilderComponent } from './components/person-builder/person-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SingletonExampleComponent,
    FactoryComponent,
    FactoryMethodComponent,
    AbstractFactoryComponent,
    BuilderComponent,
    PersonBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
