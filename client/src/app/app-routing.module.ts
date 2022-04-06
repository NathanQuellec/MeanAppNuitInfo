import { PageUtilisateurComponent } from './page-utilisateur/page-utilisateur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';
import { FormulaireAvcComponent } from './formulaire-avc/formulaire-avc.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
