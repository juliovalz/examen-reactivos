import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { ReactivoService} from './reactivo/reactivo.service';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { CrearReactivoComponent } from './reactivo/crear-reactivo/crear-reactivo.component';
;
import { ReactivosComponent } from './reactivo/reactivos/reactivos.component';;
import { RedOneReactivoComponent } from './reactivo/red-one-reactivo/red-one-reactivo.component';
import { ActualizarReactivoComponent } from './reactivo/actualizar-reactivo/actualizar-reactivo.component';;
import { ExamenesComponent } from './examenes/examenes.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { IntentosComponent } from './intentos/intentos.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ReactivoComponent ,
        CrearReactivoComponent ,
        ReactivosComponent ,
        IntentosComponent,
         MaestrosComponent,
        AlumnosComponent,
        ExamenesComponent,  
        ActualizarReactivoComponent,
        RedOneReactivoComponent], 

    providers: [
        ReactivoService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
       // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }