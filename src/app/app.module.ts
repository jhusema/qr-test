import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RequestCachingService } from './interceptor/cache-interceptor';
import { HistoryComponent } from './history/history.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CreateQrComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestCachingService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
