import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { ListProduct } from './list-product/list-product';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path: 'product', component: ListProduct}
];


