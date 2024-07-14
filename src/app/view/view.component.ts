import { Component, OnInit } from '@angular/core';
import { CreateService } from '../create.service';
import { User } from '../user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  dataSource: User[] = []
  displayedColumns: string[] = ['id', 'username', 'email', 'summary'];
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
}
