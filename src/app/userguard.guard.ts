


import { CanActivateFn } from '@angular/router';
import { ApiService } from './services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Inject, inject } from '@angular/core';

export const userguardGuard: CanActivateFn = () => {
  const api = inject(ApiService)
  const toastr = inject(ToastrService)
  const router = inject(Router)
  if(api.isLoggedInUser()){
    return true

  }else{
    toastr.warning("Access denied login Please!!")
    router.navigateByUrl('/')
    return false
  }

  
  
};