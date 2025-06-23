import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://192.168.0.2:3000/usuarios';


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Agregar un nuevo usuario
  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Eliminar usuario por ID
  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
    return throwError(() => new Error('Ocurrió un error al procesar la solicitud.'));
  }


// URL base para la API externa
private externalApiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Obtener todos los posts
getPosts(): Observable<any[]> {
  return this.http.get<any[]>(this.externalApiUrl)
    .pipe(retry(2), catchError(this.handleError));
}

// Obtener un post por ID
getPostById(id: number): Observable<any> {
  return this.http.get<any>(`${this.externalApiUrl}/${id}`)
    .pipe(retry(2), catchError(this.handleError));
}
// Agregar un post nuevo
agregarPost(post: any): Observable<any> {
  return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', post, this.httpOptions)
    .pipe(catchError(this.handleError));
}

// Eliminar post por ID
eliminarPost(id: number): Observable<void> {
  return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`, this.httpOptions)
    .pipe(catchError(this.handleError));
}

}