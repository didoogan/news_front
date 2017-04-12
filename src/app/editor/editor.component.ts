import { Component } from '@angular/core';
import {EditorService} from "./editor.service";

@Component({
  selector: 'sample',
  templateUrl: './editor.component.html',
})
export class EditorComponent{
  public ckeditorContent;
  public config;
  public fields;
  public fieldsSet;
  public show;

  constructor(private _editorService: EditorService) {
              this.config = {};

    this._editorService.getFields().subscribe(
      response => {
        this.fields = response;
        console.log(this.fields);

        let fieldsSet = [];
        this.fields.forEach(function(item, i, arr) {
          let obj: any = {};
          obj.name = item.name;
          obj.element = (item.bold)?'strong': 'normal';
          let styles_obj = {};
          styles_obj['color'] = item.color;
          styles_obj['font-size'] = item.font_size;
          obj.styles = styles_obj;
          fieldsSet.push(obj);
        });
        console.log(fieldsSet);

        this.config = {
            uiColor: '#99000',
            toolbarGroups: [
                { name: 'links' },
                { name: 'tools' },
                '/',
                { name: 'styles' },
            ],
            // toolbar: [
            //   {name: 'styles', items: ['NumberedList']}
            // ],
            //  stylesSet: [
           //   { name : 'Strong Emphasis', element : 'strong', styles: {color: 'Red', 'font-size': '20px'} },
           //   { name : 'Dich',            element : 'normal', styles: {color: 'Blue', 'font-size': '16px'} }
           // ],

            stylesSet: fieldsSet
          };
        console.log(this.config);
        this.show = true;
      },
      error => {
        console.log(error);
      }
    );




    this.ckeditorContent = '';

  }

  printEditor() {
    console.log(this.ckeditorContent);
  }

}
