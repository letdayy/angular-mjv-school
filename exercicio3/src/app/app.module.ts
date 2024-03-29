import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ListagemComponent } from './features/colaboradores/listagem/listagem.component';
@NgModule({
    declarations: [
        AppComponent,
        ListagemComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule
    ]
})
export class AppModule { }
