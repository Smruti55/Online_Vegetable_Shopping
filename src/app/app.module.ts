import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { ViewFeedbackComponent } from './components/view-feedback/view-feedback.component';
import { AddVegetableComponent } from './admin/add-vegetable/add-vegetable.component';
import { ViewVegetableComponent } from './pages/view-vegetable/view-vegetable.component';
import { ViewComplaintsComponent } from './pages/view-complaints/view-complaints.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DeleteVegetableComponent } from './admin/delete-vegetable/delete-vegetable.component';
import { UpdateVegComponent } from './pages/update-veg/update-veg.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FoodsignPageComponent } from './components/foodsign-page/foodsign-page.component';
import { HomeloginComponent } from './admin/homelogin/homelogin.component';
import { FooterComponent } from './app/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    FeedbackComponent,
    ContactComponent,
    ViewFeedbackComponent,
    AddVegetableComponent,
    ViewVegetableComponent,
    ViewComplaintsComponent,
    DeleteVegetableComponent,
    UpdateVegComponent,
    HomePageComponent,
    FoodsignPageComponent,
    HomeloginComponent,
    FooterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
