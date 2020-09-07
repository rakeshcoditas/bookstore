import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from  './shared/book.service';
import { BooklistComponent } from './booklist/booklist.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book.effects';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    HeaderComponent,
    EmployeeComponent,
    NewComponent,
    EditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, StoreModule.forRoot(reducers, { metaReducers }), 
    !environment.production ? StoreDevtoolsModule.instrument() : [], EffectsModule.forRoot([BookEffects])
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
