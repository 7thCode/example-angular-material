import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {FlexLayoutModule} from "@angular/flex-layout";

import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";

import {AbcComponent} from "./abc/abc.component";
// import { UpdateDialogComponent } from "./abc/update-dialog/update-dialog.component";
import {XyzComponent} from "./xyz/xyz.component";
import {UpdateDialogComponent} from "./abc/update-dialog/update-dialog.component";


@NgModule({
	declarations: [
		AppComponent,
		AbcComponent,
		XyzComponent,
		UpdateDialogComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,

		FlexLayoutModule,

		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatMenuModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatSnackBarModule,
		MatTableModule,
		MatDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})

export class AppModule {
}
