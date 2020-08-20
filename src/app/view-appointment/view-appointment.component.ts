import { Component, OnInit } from '@angular/core';
import { UserService }  from 'src/app/_services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private backendServie: UserService, private route: Router ) { }
  filter:string;
  humans:object=[];  
 
  fetchData =() => {
    this.backendServie.getfitnessdata().subscribe(data => this.humans = data);
  }

  ngOnInit() {
     this.fetchData();
  }
  
  getfitness() {
    
  }

  updatemydata(id:number){
    this.route.navigateByUrl("edit-fitness-trainer-appointment/"+id);
  }

  deletemydata(id:number){
    if(confirm("Are You Sure Wan to Delete")){
    this.backendServie.deleteuserdata(id).subscribe(res => console.log(res));
    this.fetchData();
    }
  }
}
