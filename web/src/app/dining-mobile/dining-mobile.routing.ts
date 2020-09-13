import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { MerchantDetailComponent } from './merchant-detail/merchant-detail.component';
import { BookDiningComponent } from './book-dining/book-dining.component';
import { CustomerVerifyComponent } from './customer-verify/customer-verify.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { DiningMobileComponent } from './dining-mobile.component';
import { NavFooterComponent } from './component/nav-footer/nav-footer.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

export const DiningMobileRoutes: Routes = [

  {
		path: '',
		component: DiningMobileComponent,
		// canActivate: [ AuthGuard ],

		// { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
           
		children: [
			{
				path: '',
				component: MerchantListComponent
			},
			{
				path: 'merchant-list',
				component: MerchantListComponent
			},
			{
				path: 'merchant-detail',
				component: MerchantDetailComponent
			},
			{
				path: 'book-dining',
				component: BookDiningComponent
			},

			{
				path: 'customer-verify',
				component: CustomerVerifyComponent
			},
			{
				path: 'order-detail',
				component: OrderDetailComponent
			},
			{
				path: 'book-list',
				component: BookListComponent
			},
			
			
		]
	},
	{
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'book-list', component: BookListComponent },
			{ path: 'merchant-list', component: MerchantListComponent },
			{ path: 'merchant-detail', component: MerchantDetailComponent },
			{ path: 'book-dining', component: BookDiningComponent },
			{path: 'order-detail',component: OrderDetailComponent},
        ]
	},
	// {
    //     path: 'book',
    //     component: BookComponent,
    //     children: [
    //         { path: 'book-list', component: BookListComponent }
    //     ]
    // }



];
