import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: 'app/home-page/home-page.module' },
    { path: 'get-to-know-us-offer', loadChildren: 'app/get-to-know-us/get-to-know-us.module' },
    { path: 'about-us', loadChildren: 'app/about-us/about-us.module' },
    { path: 'get-started', loadChildren: 'app/get-started/get-started.module' },
    { path: 'our-services', loadChildren: 'app/our-services/our-services.module' },
];

export const Routing = RouterModule.forRoot(routes);