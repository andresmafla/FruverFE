import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(correo_electronico: string, contraseña: string): Observable<any> {
    const login = { correo_electronico, contraseña };
    console.log(login)
    return this.http.post<any>(`${this.apiUrl}/login`, login).pipe(
      tap((response) => {
        if (response && response.token) {
          console.log("ingreso exitoso");
          console.log(response.token);
          this.currentUserLoginOn.next(true); // Coloca esta línea aquí, dentro de la función tap.
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getCorreo(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.decodeToken(token);
      if (decodedToken && decodedToken.correo_electronico) {
        return decodedToken.correo_electronico;
      }
    }
    return null;
  }

  private decodeToken(token: string): any {
    return null;
  }

  get user():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }


}
