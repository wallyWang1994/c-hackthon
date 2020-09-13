import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";

import { NoAccessComponent } from "./components/no-access/no-access.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

import { AuthGuard } from "./services/auth_gaurd";
import { AuthService } from "./services/auth.service";

import { NgxContentLoadingModule } from "ngx-content-loading";


import { CookieService } from "ngx-cookie-service";
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		OwlModule,
		NgxPaginationModule,

		NgxContentLoadingModule
	],
	declarations: [

		NoAccessComponent,
		PageNotFoundComponent,


	],
	exports: [
		FormsModule,
		FormsModule,
		RouterModule,
		OwlModule,
		NgxPaginationModule,
		NoAccessComponent,
		PageNotFoundComponent,

		NgxContentLoadingModule,

	],
	providers: [AuthService, AuthGuard, CookieService, FormBuilder]
})
export class SharedModule { }
