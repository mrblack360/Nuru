import { Component, OnInit } from '@angular/core';
import { QuarterliesService } from 'src/app/shared/services/quarterlies/quarterlies.service';

@Component({
  selector: 'app-quarterlies',
  templateUrl: './quarterlies.component.html',
  styleUrls: ['./quarterlies.component.scss'],
})
export class QuarterliesComponent implements OnInit {
  quarterlies: any[] = [];
  constructor(private quarterliesService: QuarterliesService) {
    this.quarterliesService.getQuarterlies().subscribe(
      (quarterlies) => {
        this.quarterlies = quarterlies;
      }
      // TODO: handle exceptions
    );
  }

  ngOnInit() {}
}
