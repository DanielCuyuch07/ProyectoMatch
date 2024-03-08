import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from 'src/interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(environment.endPoint + 'api/Students/');
  }
}
