import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UsuarioGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate() {
    const identidad = this.userService.obtenerIdentidad();

    if (identidad && identidad.rol === '5d3611c94c0c93a45ce4bc64') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
