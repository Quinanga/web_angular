import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'menu/:id', component: MenupageComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'contacto', component: ContactoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }