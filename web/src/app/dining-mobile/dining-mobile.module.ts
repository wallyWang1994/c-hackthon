import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DiningMobileRoutes } from './dining-mobile.routing';
import { MerchantListComponent } from "./merchant-list/merchant-list.component";
import { TopBannerComponent } from "./component/top-banner/top-banner.component";
import { MerchantItemComponent } from "./component/merchant-item/merchant-item.component";
import { MerchantService } from "./service/merchant.service";
import { NavFooterComponent } from "./component/nav-footer/nav-footer.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { SearchBarComponent } from "./component/search-bar/search-bar.component";
import { TreatMenuComponent } from "./component/treat-menu/treat-menu.component";
import { BookDiningComponent } from "./book-dining/book-dining.component";
import { CustomerVerifyComponent } from "./customer-verify/customer-verify.component";
import { BookListComponent } from "./book-list/book-list.component";
import { MerchantDetailComponent } from "./merchant-detail/merchant-detail.component";
import { OrderService } from "./service/order.service";
import { TopImageComponent } from "./component/top-image/top-image.component";
import { PrivilegeItemComponent } from "./component/privilege-item/privilege-item.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiningMobileComponent } from './dining-mobile.component';
import { IgxBottomNavModule } from 'igniteui-angular';
import { HomeComponent } from './home/home.component';
import { TopSlideComponent } from './component/top-slide/top-slide.component';

@NgModule({
	imports: [CommonModule,NgbModule, SharedModule,IgxBottomNavModule, RouterModule.forChild(DiningMobileRoutes)],
	declarations: [
	MerchantListComponent,
	TopBannerComponent,
	MerchantItemComponent,
	NavFooterComponent,
	OrderDetailComponent,
	BookListComponent,
	SearchBarComponent,
	TreatMenuComponent,
	BookDiningComponent,
	CustomerVerifyComponent,
	MerchantDetailComponent,
	TopImageComponent,
	PrivilegeItemComponent,
	DiningMobileComponent,
	HomeComponent,
	TopSlideComponent
  ],
	providers: 
	[
		MerchantService,
		OrderService

	],
	schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class DiningMobileModule { }
