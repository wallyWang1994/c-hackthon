import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

import { AuthGuard } from '../shared/services/auth_gaurd';
import { Role } from '../shared/enum/Role';
import { OrderVerificationComponent } from './order-verification/order-verification.component';
import { MerchantAddComponent } from './merchant-add/merchant-add.component';
import { DiningWebComponent } from './dining-web.component';

export const DiningWebRoutes: Routes = [

  {
		path: '',
		component: DiningWebComponent,
		// canActivate: [ AuthGuard ],
        // data: {roles: [Role.ADMIN, Role.MERCHANT]},
		children: [
			{
				path: '',
				component: OrderListComponent,
				// canActivate: [ AuthGuard ],
				// data: {roles: [Role.MERCHANT]},
			},
			{
				path: 'order-list',
				component: OrderListComponent,
				// canActivate: [ AuthGuard ],
				// data: {roles: [Role.MERCHANT]},
			},
			{
				path: 'order-verification',
				component: OrderVerificationComponent,
				// canActivate: [ AuthGuard ],
				// data: {roles: [Role.MERCHANT]},
			},
			{
				path: 'merchant-add',
				component: MerchantAddComponent,
				// canActivate: [ AuthGuard ],
				// data: {roles: [Role.ADMIN]},
			}
		]
	}



];
