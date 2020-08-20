import { Component, OnInit} from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from "@angular/forms";
import {UserService} from "src/app/_services/user.service";
import { ActivatedRoute } from "@angular/router";

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm = this.fb.group({
    id:[''],
    firstname : ['',Validators.required],
    lastname : ['',Validators.required],
    age:['',Validators.compose([
      Validators.required,
      Validators.min(18),
      Validators.max(60)
    ]) ],
    phonenumber:['',Validators.compose([
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ])],
    email:['',Validators.compose([
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    ])], 
    streetaddress:['', Validators.required],
    city:['', Validators.required],
    state:['', Validators.required],
    country:['', Validators.required],
    pincode:['',Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ])],
    trainerpreference:['', Validators.required],
    packages:['', Validators.required],

  });
  
  constructor(private fb:FormBuilder, private backendService : UserService,private route: ActivatedRoute) { }
  id:number;
  editMode:boolean = false;
  ngOnInit() {
    this.editMode = false;
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if(this.id){
      this.editMode = true;
      console.log("edit rite");
      this.backendService.getuserdata(this.id).subscribe(res =>{
        //console.log(res);
        this.updatePrice(res.packages)
        this.fitnessForm.setValue(res);
        console.log("Number",res.package)
        
      })
      
    }

    
    console.log(this.editMode)
  }

  ngAfterViewInit() {
    
    
  }
  onSubmit() {
    if(!this.editMode){
    console.log(this.fitnessForm.value);
    if(this.fitnessForm.valid){
      this.backendService.postfitnessdata(this.fitnessForm.value).subscribe(res => {
        if(res.id){
          //this.router.navigateByUrl('/place-fitness-trainer-appointment')
          this.fitnessForm.reset();
          document.getElementById("inr").innerHTML = "00";
          alert("Appoinment Placed Successfully");
        }
      })
    }
  }
  else{
    if(this.fitnessForm.valid){
      this.backendService.updateuserdata(this.id,this.fitnessForm.value).subscribe(res => {
        if(res.id){
          //this.router.navigateByUrl('/place-fitness-trainer-appointment')
          this.fitnessForm.reset();
          document.getElementById("inr").innerHTML = "00";
          alert("Appoinment Updated Successfully");
        }
      })
    }
  }
  }
    
  updatePrice(val:string){
    console.log(val);
    switch(val){
      case "BASIC":
        document.getElementById("inr").innerHTML = "3000";
        break;
      case "INTERMEDIATE":
        document.getElementById("inr").innerHTML = "6000";
        break;
      case "ADVANCED":
        document.getElementById("inr").innerHTML = "10000";
        break;
      case "PROFESSIONAL":
        document.getElementById("inr").innerHTML = "12000";
        break;
    }
  }

}
