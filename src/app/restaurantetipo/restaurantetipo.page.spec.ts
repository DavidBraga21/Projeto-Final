import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantetipoPage } from './restaurantetipo.page';

describe('RestaurantetipoPage', () => {
  let component: RestaurantetipoPage;
  let fixture: ComponentFixture<RestaurantetipoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantetipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
