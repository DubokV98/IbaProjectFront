import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../service/home/home.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Table} from '../../model/Table';
import {Action} from '../../model/Action';
import {Select} from '../../model/Select';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  headersAction = ['#', 'request', 'result', 'date', 'time'];
  table: Table[] = [];
  request: string;
  actions: Action [] = [];
  select: Select;
  constructor(private route: ActivatedRoute,
              private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.checkTablesAndStructure();
  }

    sendRequest() {
    this.homeService.sendRequestToDatabase(this.request).subscribe((res: Select) => {
        this.select = res;
        console.log(this.select);
        this.takeTodayAction();
      }, error => {
        this.takeTodayAction();
      });
    }

    checkTablesAndStructure(){
      this.homeService.getTableAndStructure().subscribe((res: Table[]) => {
        this.table = res;
      });
    }

  takeTodayAction() {
    this.homeService.getTodayAction().subscribe((res: Action[]) => {
      this.actions = res;
    });
  }

  takeAllAction() {
    this.homeService.getAllAction().subscribe((res: Action[]) => {
      this.actions = res;
    });
  }
}
