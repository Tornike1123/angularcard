import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ValidationComponent } from './pages/validation/validation.component';
import { DetalesComponent } from './detales/detales.component';

const routes: Routes = [
  {
    path: 'pages/contact',
    component: ContactComponent,
  },
  {
    path: 'pages/product',
    component: ProductComponent,
  },
  {
    path: 'detales/:id',
    component: DetalesComponent,
  },
  {
    path: 'pages/gallery',
    component:GalleryComponent
  },
  {
   path:'pages/validation',
   component:ValidationComponent
  },

  {
    path: '',
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
