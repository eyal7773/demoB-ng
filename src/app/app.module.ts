import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { CakeComComponent } from './cake-com/cake-com.component';
import { Output1Component } from './output1/output1.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartRxComponent } from './start-rx/start-rx.component';
import { UseHttpComponent } from './use-http/use-http.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';

const myWebsiteRoutes: Routes = [
  { path: '' , component:Com1Component},
  { path: 'com2', component: Com2Component},
  { path: 'com3', component: Com3Component},
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CakeComComponent,
    Output1Component,
    TwoWayComponent,
    PipesComponent,
    CustomPipe,
    FormValidationComponent,
    HeaderComponent,
    FooterComponent,
    StartRxComponent,
    UseHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myWebsiteRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
