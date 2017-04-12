import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public editorContent: string = 'My Document\'s Title';

  public options: Object = {
    placeholderText: 'Edit Your Dich Here!',
    // toolbarBottom: false,
    toolbarButtons: ['undo', 'redo' ,'bold', 'italic'],
    toolbarButtonsXS: ['undo', 'underline'],
    innerHTML: 'Click Me',
    charCounterCount: false
  };


  printEditor() {
    console.log(this.editorContent);
  }
}
