import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlumnosComponent } from './componentes/dialog-alumnos/dialog-alumnos.component';
import { User } from './models';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  userName = '';

  users: User[] = [];

  constructor(
    private matDialog: MatDialog,
    private usersService: AlumnosService
  ) {
    this.users = this.usersService.getUsers();
  }

  openUsersDialog(): void {
    this.matDialog
      .open(DialogAlumnosComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users = [
              ...this.users,
              {
                ...v,
                id: new Date().getTime(),
              },
            ];
          }
        },
      });
  }

  onEditUser(user: User): void {
    this.matDialog
      .open(DialogAlumnosComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users = this.users.map((u) =>
              u.id === user.id ? { ...u, ...v } : u
            );
          }
        },
      });
  }

  onDeleteUser(userId: number): void {
    if (confirm('Esta seguro?')) {
      this.users = this.users.filter((u) => u.id !== userId);
    }
  }
}
