import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pick-and-drop',
  templateUrl: './pick-and-drop.component.html',
  styleUrls: ['./pick-and-drop.component.css']
})
export class PickAndDropComponent {

   PickDropForm:FormGroup;
   submitted=false;

  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit() {
    this.PickDropForm=this.formBuilder.group({
      pickDropId:['',Validators.required] ,
      transport:['',Validators.required] ,
      time:['',Validators.required] ,
      passengers:['',Validators.required],
      location: ['', Validators.required],      
      title: ['', Validators.required]

       });
  }

  onSubmit(){
      this.submitted=true;
      // if(this.PickDropForm.invalid){
      //   return;
      // }
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.PickDropForm.value, null, 4));
      console.log('Sucess!! \nPick and Drop Id - '+this.f.pickDropId.value + "\nLocation - " + this.f.location.value + "\nTransport - " + this.f.transport.value + "\nTime - " + this.f.time.value + "Number of Passengers - " + this.f.passengers.value + "Time - " + this.f.title.value);
  }
  get f(){
    return this.PickDropForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.PickDropForm.reset();
  }
}
