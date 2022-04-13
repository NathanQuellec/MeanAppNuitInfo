import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { PageUtilisateurComponent } from './page-utilisateur/page-utilisateur.component';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';
import { FormulaireAvcComponent } from './formulaire-avc/formulaire-avc.component';
import { AvcComponent } from './modules/resultatsMaladies/avc/avc.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardiaqueComponent } from './modules/resultatsMaladies/cardiaque/cardiaque.component';
import { FormulaireCardiaqueComponent } from './formulaire-cardiaque/formulaire-cardiaque.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireUtilisateurComponent,
    AccueilComponent,
    HeaderComponent,
    FormulaireAvcComponent,
    HeaderComponent,
    PageUtilisateurComponent,
    AvcComponent,
    CardiaqueComponent,
    FormulaireCardiaqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    NgChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
