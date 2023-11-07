
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.page.html',
  styleUrls: ['./recomendados.page.scss'],
})
export class RecomendadosPage implements OnInit {
  notas: any[] =[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNotasAcimaDeTresEstrelas();
  }

  getStars(nota: number): string[] {
    const fullStars = Math.floor(nota);
    const halfStar = nota - fullStars >= 0.5;
    const starsArray = Array(fullStars).fill('star');
    if (halfStar) {
      starsArray.push('star-half');
    }
    return starsArray;
  }

  getNotasAcimaDeTresEstrelas() {
    this.http.get<any[]>('http://localhost:3000/notas').subscribe(
      (response) => {
        this.notas = response;
      },
      (error) => {
        console.error('Erro ao obter as notas:', error);
      }
    );
  }
}