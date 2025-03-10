import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { NgForm, NgModel } from '@angular/forms';
import { CreateService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  isCreateUser: boolean = true
  user: User = {
    id: '',
    username: '',
    email: '',
    summary: ''
  };
  constructor(private createService: CreateService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user']
    //this.getUsers();
    console.log(123, this.user);
    if (this.user.id != '') {
      this.isCreateUser = false
    } else {
      this.isCreateUser = true
    }
  }

  createUser(userForm: NgForm): void {
    if (userForm.valid) {
      if (this.isCreateUser) {
        this.createService.createUser(this.user).subscribe(
          {
            next: (res: Object) => {
              this.router.navigate(['/'])
            },
            error: (err: HttpErrorResponse) => {
              console.log(err);
            }
          }
        )
      } else {
        this.createService.updateUser(this.user).subscribe(
          {
            next: (res: Object) => {
              this.router.navigate(['/'])
            },
            error: (err: HttpErrorResponse) => {
              console.log(err);
            }
          }
        )
      }
    }
  }

  getFormControl(form: NgForm, controlName: string): NgModel {
    return form.controls[controlName] as unknown as NgModel;
  }

}
