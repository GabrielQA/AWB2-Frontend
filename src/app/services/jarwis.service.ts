import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
  
  email(data) {
    return this.http.post(`${this.baseUrl}/email`, data)
  }
  verify(data) {
    return this.http.post(`${this.baseUrl}/verify`, data)
  }
  validation(data) {
    return this.http.post(`${this.baseUrl}/validation`, data)
  }



  //Routes CRUD VIDEOS

  //View Videos /Listo
  videos() {
    return this.http.get<any[]>(`${this.baseUrl}/videos`)
  }
  //Create Videos /Listo
  create_videos(data) {
    return this.http.post(`${this.baseUrl}/create_videos`, data)
  }
  //Modify Videos
  modvideos(data) {
    return this.http.put(`${this.baseUrl}/modvideos}`,data)
  }
  //Delete Videos
  deletevideos(id) {
    return this.http.delete(`${this.baseUrl}/deletevideos/${id}`)
  }
  //Search Video le puse seach pero es search
  seachvideo(data) {
    return this.http.post<any[]>(`${this.baseUrl}/seachvideo`, data)
  }
  
  //Routes CRUD USERS

  //View /Listo
  userskids() {
    return this.http.get<any[]>(`${this.baseUrl}/userskids`)
  }
  //Create Users /Listo
  create_users(data) {
    return this.http.post(`${this.baseUrl}/create_users`, data)
  }
  //Modify Users
  modusers(data) {
    return this.http.put(`${this.baseUrl}/modusers}`,data)
  }
  //Delete Users
  deleteusers(id) {
    return this.http.delete(`${this.baseUrl}/deleteusers/${id}`)
  }
}
