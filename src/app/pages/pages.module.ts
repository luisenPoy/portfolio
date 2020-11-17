import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedpagesModule } from './sharedpages/sharedpages.module';

import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    AboutComponent,
    WorksComponent,
    ContactComponent,
    WorkDetailComponent,
    PagesComponent,
  ],
  imports: [CommonModule, SharedpagesModule],
  exports: [
    AboutComponent,
    WorksComponent,
    ContactComponent,
    WorkDetailComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
