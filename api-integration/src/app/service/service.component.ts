import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../studentserv/student.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  
  constructor(private service:CustomerService) { 
    // this.LoadCustomer();
  }
  customerdata:any = []
  ngOnInit(): void {
 
      this.service.LoadCustomer()
      .subscribe((response:any) => {
        this.customerdata = response.data
        console.log( this.customerdata)

      });
  }

  

  // delete(ID:any){
  //   if(confirm("Do you want to remove?")){
  //   this.service.RemoveCustomer(ID).subscribe(data=>{
  //     this.LoadCustomer();
  //   });
  // }
  // }

}
