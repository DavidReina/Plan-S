import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-refresh-search-page',
  templateUrl: './refresh-search-page.component.html',
  styleUrls: ['./refresh-search-page.component.css']
})
export class RefreshSearchPageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    this.router.navigate(['../plansearch'])
  }

}
