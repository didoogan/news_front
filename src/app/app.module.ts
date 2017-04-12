import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { CKEditorModule } from 'ng2-ckeditor';
import { EditorComponent } from './editor/editor.component';
import {RouterModule} from "@angular/router";
import {EditorService} from "./editor/editor.service";
import {GeneralLib} from "./lib";

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CKEditorModule,
    RouterModule.forRoot([
      { path: "editor", component: EditorComponent },
    ])
  ],
  providers: [EditorService, GeneralLib],
  bootstrap: [AppComponent]
})
export class AppModule { }
