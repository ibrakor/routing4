import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComprarComponent} from "./components/comprar/comprar.component";
import {ModificarComponent} from "./components/modificar/modificar.component";
import {AddComponent} from "./components/add/add.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";

const routes: Routes = [
  { path: '', component: ComprarComponent },
  { path: 'añadir', component: AddComponent },
  { path: 'modificar/:id', component: ModificarComponent},
  {path: '**', component: NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
