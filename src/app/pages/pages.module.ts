import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [AboutComponent, WorksComponent, ContactComponent, WorkDetailComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
