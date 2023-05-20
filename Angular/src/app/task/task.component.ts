import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../Models/taskModel';
import { NgForm } from '@angular/forms';
import { taskservices } from './Service/TaskService';
import{faEdit,faTrashAlt}from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  faEdit=faEdit;
  faTrashAlt=faTrashAlt;
  isTittle:boolean=false;
  usersList:TaskModel[]=[];
  users:TaskModel;
  isEdit:boolean=false;
 task: TaskModel=new TaskModel();
 searchText:any = " ";
constructor(private tservice:taskservices,private toastr:ToastrService){} 

 onSubmit(form:NgForm)
 {
  if(!this.isEdit){
     //console.log(form.value);
     this.tservice.AddTask(this.task).subscribe(res=>
      {
        this.toastr.success("Task Added Successful");
        console.log(res);
      form.resetForm();
      this.getAll();
    })
  }
  else{
       this.tservice.UpdateTask(form.value).subscribe(res=>{
      console.log(res);
      form.resetForm();
      this.isEdit=false;
      this.isTittle=false;
      this.getAll();
    })
  }
 }

  getAll(){
    this.searchText = this.searchText === " " ? null : this.searchText;
    this.tservice.GetAllTask(this.searchText).subscribe(res=>{
      this.usersList=res;
    })
  }
  ngOnInit(){
    this.getAll();
  }
  edit(data:TaskModel)
  {
   this.isEdit=true;
   this.isTittle=true;
   this.tservice.GetOne(data.id).subscribe(res=>{
   console.log(res)});
   this.task=data;
  
}
    delete(model:TaskModel)
   {
     Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.tservice.DeleteTask(model.id).subscribe(res=>{
          this.getAll();
        })
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  }


