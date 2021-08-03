import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Internet-Banking';

  constructor(public dialog: MatDialog){}

  openDialog(){

    const dialogRef = this.dialog.open(AppComponent,{

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' +result);
    });
  }
}
