import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from "@angular/material/toolbar";

import {AbcComponent} from "./abc/abc.component";
import {XyzComponent} from "./xyz/xyz.component";

@NgModule({
	declarations: [
		AppComponent,
		AbcComponent,
		XyzComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatMenuModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		MatCardModule,
		MatSnackBarModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})

export class AppModule {
}
