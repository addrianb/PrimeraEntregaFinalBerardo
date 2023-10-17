import { Inject, Injectable} from '@angular/core';
import { User } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('LA URL INYECTADA ES :', url);
  }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'adrian',
        lastName: 'berardo',
        email: 'adrian@mail.com',
      },

    ];
  }
}
