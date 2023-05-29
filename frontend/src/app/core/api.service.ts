import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
_id?: string | null
name?: string | null
email?: string | null
password?: string | null
token?: string | null
}

export interface Customer {
_id?: string | null
fname?: string | null
lname?: string | null
email?: string | null
phone?: string | null
address?: string | null
}
export interface Employee {
_id?: string | null
name?: string | null
phone?: string | null
email?: string | null
birthday?: string | null
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addEmpoloyees(value: Partial<{ fname: string | null; lname: string | null; phone: string | null; email: string | null; addrees: string | null; }>) {
    throw new Error('Method not implemented.');
  }

  BASE_URL = 'http://localhost:3000/'
  private TOKEN_KEY = 'token'
  getEmpoloyees: any;

  setToken(value: string){
    localStorage.setItem(this.TOKEN_KEY, value)
  }

  getToken():string{
    return localStorage.getItem(this.TOKEN_KEY) || ''
  }

  deleteToken(){
    localStorage.removeItem(this.TOKEN_KEY)
  }
  GET<DynamicType>(endpoint: string): Observable<DynamicType> {
    return this.http.get<DynamicType>(
        `${this.BASE_URL}${endpoint}`,
        {
            headers: {
                // 'x-auth-token': this.getToken()
            }
        }
        )
    }

  POST<DynamicType>(endpoint: string, data: DynamicType):Observable<DynamicType>{
    return this.http.post<DynamicType>(
      `${this.BASE_URL}${endpoint}`,
      data,
      {
        headers:{
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken()
        }
      }
    )
  }

  signup(user: User):Observable<User>{
    return this.POST<User>('users/signup', user)
  }

  login(user: User):Observable<User>{
    return this.POST<User>('users/login', user)
  }

  addCustomer(customer: Customer):Observable<Customer>{
    return this.POST<Customer>('customers', customer)
  }
  addEmployee(employee: Employee):Observable<Employee>{
    return this.POST<Employee>('employees',employee )
  }

  getCustomer():Observable<Array<Customer>>{
    return this.GET<Array<Customer>>('customers')
  }
  getEmployee():Observable<Array<Employee>>{
    return this.GET<Array<Employee>>('employees')
  }

  getOneCustomer(id: string):Observable<Customer>{
    return this.GET<Customer>(`customers/${id}`)
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(
        `${this.BASE_URL}customers/${id}`,
        {
            headers: {
                // 'x-auth-token': this.getToken()
            }
        }
        )
    }
updateDetails(id: string, customer: Customer): Observable<Customer> {
  return this.http.put<Customer>(
      `${this.BASE_URL}customers/${id}`,
      customer,
      {
          headers: {
            'Content-Type': 'application/json'
              // 'x-auth-token': this.getToken()
          }
      }
        )
    }

  constructor(private http: HttpClient) { }
}
