import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import {FeedbackComponent} from './feedback/feedback.component'
import { ContactComponent } from './contact/contact.component';
import { ViewFeedbackComponent } from './components/view-feedback/view-feedback.component';
import { AddVegetableComponent } from './admin/add-vegetable/add-vegetable.component';
import { ViewVegetableComponent } from './pages/view-vegetable/view-vegetable.component';
import { ViewComplaintsComponent } from './pages/view-complaints/view-complaints.component';
import { AboutComponent } from './about/about.component';
import { DeleteVegetableComponent } from './admin/delete-vegetable/delete-vegetable.component';
import { UpdateVegComponent } from './pages/update-veg/update-veg.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FoodsignPageComponent } from './components/foodsign-page/foodsign-page.component';
import { HomeloginComponent } from './admin/homelogin/homelogin.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home-page',component:HomePageComponent},
  

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path: 'home', component: HomeComponent },  
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'admin', component: AdminComponent},
  {path:'admin-home', component: AdminHomeComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'contact',component:ContactComponent},
  {path:'addvegetable', component:AddVegetableComponent},
  {path:'viewfeedback',component:ViewFeedbackComponent},
  {path:'viewstock',component:ViewVegetableComponent},
  {path:'ViewComplaints', component:ViewComplaintsComponent},
  {path:'about',component:AboutComponent},
  {path:'delete',component:DeleteVegetableComponent},
  {path:'update/:id',component:UpdateVegComponent},
  {path:'foodsign/:id',component:FoodsignPageComponent},
  {path:'home-login',component:HomeloginComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
