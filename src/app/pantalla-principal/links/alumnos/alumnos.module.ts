import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TablaAlumnosComponent } from './componentes/tabla-alumnos/tabla-alumnos.component';
import { DialogAlumnosComponent } from './componentes/dialog-alumnos/dialog-alumnos.component';
import { AlumnosService } from './alumnos.service';
import { ApiUrl } from 'src/app/config/url.token';




@NgModule({
  declarations: [AlumnosComponent,TablaAlumnosComponent, DialogAlumnosComponent],
  imports: [CommonModule, SharedModule],
  exports: [AlumnosComponent],

  providers: [
    AlumnosService,
    {
      provide: AlumnosService,
      useClass: AlumnosService,
    },

    {
      provide: ApiUrl,
      useValue: {
        url: 'http://localhost:34322/users',
      },
    },
  ],
})
export class AlumnosModule { }
