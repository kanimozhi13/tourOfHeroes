import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { MessageService} from './message.service';
import { Hero } from './hero';

describe('HeroService', () => {
  let service: HeroService;
  let messageService : MessageService;
  let httpMock: HttpTestingController;
  const invalidRequestBody = 'Invalid request parameters';
  const invalidRequestOptions = { status: 404, statusText:  'Bad Request' };
  const errorMessage = 'failed: Http failure res for api/heroes: 404 Bad Request';

  const mockHeroes: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    //error 'get' deprecated v9.0.0 testBed
    //heroService = TestBed.get(HeroService);
    //messageService = TestBed.get(MessageService);
    //httpMock = TestBed.get(HttpTestingController)    
    service = TestBed.inject(HeroService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//   it('should get hero', () => {
//     const expectedLog = 'fetched hero id=11';
//     const expectedMessage = 'HeroService: fetched hero id=11';

//     const handleErrorSpy = spyOn<any>(service, 'handleError').and.callThrough();
//     const logSpy = spyOn<any>(service, 'log').and.callThrough();
//     const addSpy = spyOn(messageService, 'add').and.callThrough();

//     service.getHero(11).subscribe(hero => {
//       expect(hero.id).toEqual(11);
//       expect(hero.name).toEqual(`Dr Nice`);
//     });

// });

// const request = httpMock.expectOne( 'api/heroes', 'call to getHeroes');
//     expect(request.request.method).toBe('GET');
//     request.flush(mockHeroes);

//     expect(handleErrorSpy).toHaveBeenCalledTimes(1);
//     expect(logSpy).toHaveBeenCalledTimes(1);
//     expect(addSpy).toHaveBeenCalledTimes(1);

//     expect(handleErrorSpy).toHaveBeenCalledWith('getHeroes', [  ]);
//     expect(logSpy).toHaveBeenCalledWith('fetched heroes');
//     expect(addSpy).toHaveBeenCalledWith('HeroService: fetched heroes');
//   });

});
