import { PageUtilisateurComponent } from './page-utilisateur/page-utilisateur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';
import { FormulaireAvcComponent } from './formulaire-avc/formulaire-avc.component';
import { AvcComponent } from './modules/resultatsMaladies/avc/avc.component';
import { CardiaqueComponent } from './modules/resultatsMaladies/cardiaque/cardiaque.component';
import { FormulaireCardiaqueComponent } from './formulaire-cardiaque/formulaire-cardiaque.component';
import { FormulaireDiabeteComponent } from './formulaire-diabete/formulaire-diabete.component';
import { DiabeteComponent } from './modules/resultatsMaladies/diabete/diabete.component';

const routes: Routes = [
  {
    path: "Informations", component: FormulaireUtilisateurComponent
  },
  {
    path: "Accueil", component: AccueilComponent
  },
  {
    path: "Profile", component: PageUtilisateurComponent
  },
  {
    path: "Informations/AVC", component: FormulaireAvcComponent
  },
  {
    path: "Maladies/AVC", component: AvcComponent
  },
  {
    path: "Maladies/Cardiaque", component: CardiaqueComponent
  },
  {
    path: "Informations/Cardiaque", component: FormulaireCardiaqueComponent
  },
  {
    path: "Informations/Diabete", component: FormulaireDiabeteComponent
  },
  {
    path: "Maladies/Diabete", component: DiabeteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
