import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaPrincipalComponent } from './pantalla-principal.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AlumnosComponent } from './links/alumnos/alumnos.component';
import { SharedModule } from '../shared/shared.module';
import { AlumnosModule } from './links/alumnos/alumnos.module';



@NgModule({
  declarations: [PantallaPrincipalComponent, SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
     NgIf, 
     MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    SharedModule,
    AlumnosModule,
    
  ],
  exports: [
    PantallaPrincipalComponent, 
  ],
})
export class PantallaPrincipalModule { }