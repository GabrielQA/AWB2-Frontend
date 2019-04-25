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
  create_users(data) {
    return this.http.post(`${this.baseUrl}/create_users`, data)
  }
  create_videos(data) {
    return this.http.post(`${this.baseUrl}/create_videos`, data)
  }
  userskids() {
    return this.http.get(`${this.baseUrl}/userskids`)
  }
  videos(data) {
    return this.http.post(`${this.baseUrl}/viewvideos`, data)
  }
}
