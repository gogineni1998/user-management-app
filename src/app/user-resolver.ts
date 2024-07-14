import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { CreateService } from "./create.service";
import { Observable, of } from "rxjs";
import { User } from "./user.model";

export const UserResolver: ResolveFn<any> = 
    (route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        createService: CreateService = inject(CreateService)) :Observable<User> => {
            var userId = route.paramMap.get("id")
            if(userId) {
                return createService.getUser(userId)
            } else {
                const user: User = {
                    id: '',
                    username: '',
                    email: '',
                    summary: ''
                  };
                  return of(user)
            }
        } 