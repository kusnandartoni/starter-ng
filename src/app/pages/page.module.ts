import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    }
  ];
  

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
    declarations: [LoginComponent]
})
export class PageModule {

}
