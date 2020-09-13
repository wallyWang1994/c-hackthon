import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DiningWebRoutes } from './dining-web.routing';
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderVerificationComponent } from "./order-verification/order-verification.component";
import { MerchantAddComponent } from "./merchant-add/merchant-add.component";
import { DiningWebComponent } from './dining-web.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	
	imports: [CommonModule, SharedModule,NgbDropdownModule, TranslateModule, RouterModule.forChild(DiningWebRoutes)],
	declarations: [
		OrderListComponent,
		OrderVerificationComponent,
		MerchantAddComponent,
		DiningWebComponent, SidebarComponent, HeaderComponent
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class DiningWebModule { }
