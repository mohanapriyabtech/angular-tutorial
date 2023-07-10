import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiurl='http://localhost:8000/api/v1';
  constructor(private http:HttpClient) {

   }
  //  LoadCustomer() {
  //   const apiUrl = 'http://localhost:8000/api/v1'; // Replace with your API endpoint
  
  //   this.http.get(apiUrl).subscribe(
  //     (response) => {
  //       console.warn('API Response:', response);
  //       return response
  //       // Handle the response data
  //     },
  //     (error) => {
  //       console.error('API Error:', error);
  //       // Handle the error
  //     }
  //   );
  // }

   LoadCustomer(){
     return this.http.get(this.apiurl+'/all-student');
   }
   SaveCustomer(customedata:any){
    return this.http.post(this.apiurl+'/student-signup',customedata);
   }
   LoadCustomerbycode(id:any){
    return this.http.get(this.apiurl+'/update-student/'+id);
  }
  RemoveCustomer(id:any){
    return this.http.delete(this.apiurl+'/delete-student/'+id);
  }

}
