import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuarterliesService } from 'src/app/shared/services/quarterlies/quarterlies.service';

@Component({
  selector: 'app-quarterlies',
  templateUrl: './quarterlies.component.html',
  styleUrls: ['./quarterlies.component.scss'],
})
export class QuarterliesComponent implements OnInit {
  quarterlies: any[] = [];

  constructor(
    private quarterliesService: QuarterliesService,
    private router: Router
  ) {
    this.quarterliesService.getQuarterlies().subscribe(
      (quarterlies) => {
        this.quarterlies = quarterlies;
      },
      (err) => {
        console.log(err);
      }
      // TODO: handle exceptions
    );
  }

  ngOnInit() {}

  quarterlySelect(quarterly: any): any {
    this.quarterliesService.selectedQuarterly = quarterly;
    this.router.navigate(['lessons/quarterly']);
  }
}
