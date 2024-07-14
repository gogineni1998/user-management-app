import { Component, OnInit } from '@angular/core';
import { CreateService } from '../create.service';
import { User } from '../user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  dataSource: User[] = []
  displayedColumns: string[] = ['id', 'username', 'email', 'summary', 'delete'];
  constructor(private createService: CreateService) {
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
      deleteUser(userId: string) {
        console.log(userId);
        this.createService.deleteEmployee(userId).subscribe(
          {
            next: (res) => {
              this.getUsers();
            },
            error: (err: HttpErrorResponse) => {
              console.log(err);
              
            },
          }
        )
        
        }
}
