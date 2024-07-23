import { Component, OnInit } from '@angular/core';
import { CreateService } from '../user.service';
import { User } from '../user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  dataSource: User[] = []
  displayedColumns: string[] = ['id', 'username', 'email', 'summary', 'edit', 'delete'];
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

    this.router.navigate(['/create', { id: userId }])

  }

  deleteUser(userId: string) {
    console.log(userId);
    this.createService.deleteUser(userId).subscribe(
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
