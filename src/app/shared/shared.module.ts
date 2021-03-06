import {NgModule} from '@angular/core';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from './header/header.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
@NgModule(
      {
            declarations: [
                NopagefoundComponent,
                HeaderComponent,
                SidebarComponent,
                BreadcrumbsComponent,
                NopagefoundComponent,
                ModalUploadComponent
            ],
            exports: [
                NopagefoundComponent,
                HeaderComponent,
                SidebarComponent,
                BreadcrumbsComponent,
                NopagefoundComponent,
                ModalUploadComponent
            ],
            imports:[RouterModule, CommonModule, PipesModule]
        }
)export class SharedModule{}