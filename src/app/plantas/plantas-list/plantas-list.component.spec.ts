import { waitForAsync, ComponentFixture, TestBed }  from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

import { PlantasListComponent } from './plantas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasListComponent ],
      providers: [
        {
          provide: PlantasService,
          useValue: {
            getPlantas: () => of([])
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;

    component.plantas = [];

    for (let i = 0; i < 2; i++) {
      const planta = new Planta(
        faker.number.int(),
        faker.person.firstName(),
        faker.person.firstName(),
        faker.person.jobTitle(),
        faker.number.float(),
        faker.location.country(),
        faker.lorem.sentence()
      );
      component.plantas.push(planta);

      (TestBed.inject(PlantasService) as any).getPlantas = () => of(component.plantas);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with three rows', () => {
    const rows = debug.queryAll(By.css('tr'));
    expect(rows.length).toBe(3);
  });
});
