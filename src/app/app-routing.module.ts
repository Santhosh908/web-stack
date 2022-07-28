import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BformComponent } from './components/bform/bform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes  =[  
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:BformComponent},
  { path: 'home', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
