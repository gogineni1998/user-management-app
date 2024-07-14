import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { CreateService } from '../create.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataSource: User[] = []
  displayedColumns: string[] = ['id', 'username', 'email', 'summary', 'edit'];
  user: any;
  constructor(private createService: CreateService, private router: Router) {
    this.getUsers();
  }
  ngOnInit(): void {
    
  }

  getUsers(): void {
    this.createService.getUsers().subscribe(
      {
        next: (res: User[]) => {
          this.dataSource = res
          
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      }
        );
      }
      editUser(userId: string) {
        console.log(userId);
        
        this.router.navigate(['/create', {id: userId}])
        
        }
}
