import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.page.html',
  styleUrls: ['./novidades.page.scss'],
})
export class NovidadesPage{
  items: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.loadLastItems();
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

  loadLastItems() {
    this.http.get<any[]>('http://localhost:3000/items').subscribe(
      (response) => {
        this.items = response;
      },
      (error) => {
        console.error('Erro ao obter os itens:', error);
      }
    );
  }
}