import { Routes } from '@angular/router';
import { App } from './app';
import { Contact } from './contactas';

export const routes: Routes = [
    {path:'',component:App},
    {path:'contact', component:Contact}
];
