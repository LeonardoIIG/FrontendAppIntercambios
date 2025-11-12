import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/authentication/login/login';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'login', component: Login}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }

