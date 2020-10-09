import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onTap(){
    console.log("adding activity...")
    this.http.addActivity("new ting ting")
      .subscribe(
        (results)=>{console.log(results)},
        (err)=>{console.log(err)},
      );
  }

}
