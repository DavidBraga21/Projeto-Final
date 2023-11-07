import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage {
  resultados: any[] =[];

  constructor(private activatedRoute: ActivatedRoute) { }

  getStars(nota: number): string[] {
    const fullStars = Math.floor(nota);
    const halfStar = nota - fullStars >= 0.5;
    const starsArray = Array(fullStars).fill('star');
    if (halfStar) {
      starsArray.push('star-half');
    }
    return starsArray;
  }

  ionViewDidEnter() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['resultados']) {
        this.resultados = JSON.parse(params['resultados']);
      }
    });
  }
}