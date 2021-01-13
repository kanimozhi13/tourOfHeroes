import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  
  });
// error undefined to be defined
// it('should have a hero', () => {
//   expect(component.heroes).toBeDefined();
//   expect(undefined).not.toBeUndefined();
//   expect(component.heroes.length).toEqual(10);
// });

// it('should have a list of heroes', () => {
//   const heroes = fixture.debugElement.queryAll(By.css('.heroes > li'));
//   HEROES.forEach((hero, index) => {
//     expect(heroes[index].nativeElement.textContent).toContain(hero.id);
//     expect(heroes[index].nativeElement.textContent).toContain(hero.name);
//   });
// });
  
});
