import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterCustomerComponent } from './register-customer.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from '../login.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { ActivatedRoute } from '@angular/router';

describe('RegisterCustomerComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        RegisterCustomerComponent,
      ],
      providers: [LoginService,SocialAuthService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {'id': '123'}}}
        },
        {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                'clientId'
              ),
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('1030902997345402'),
            },
            {
              id: AmazonLoginProvider.PROVIDER_ID,
              provider: new AmazonLoginProvider(
                'clientId'
              ),
            }
          ],
        } as SocialAuthServiceConfig,
      }],
    })
    .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(RegisterCustomerComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  it('Labels should contain username', () => {
    let fixture = TestBed.createComponent(RegisterCustomerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Username');
  })
  it('Check if submit button is present or not', () => {
    let fixture = TestBed.createComponent(RegisterCustomerComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Submit');
  })

});
