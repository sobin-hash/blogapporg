import { CanActivateFn } from '@angular/router';
import { ApiService } from './services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Inject, inject } from '@angular/core';

export const routeguardGuard: CanActivateFn = () => {
  const api = inject(ApiService)
  const toastr = inject(ToastrService)
  const router = inject(Router)
  if(api.isLoggedIn()){
    return true

  }else{
    toastr.warning("Access denied you are not an admin!!")
    router.navigateByUrl('/home')
    return false
  }

  
  
};
