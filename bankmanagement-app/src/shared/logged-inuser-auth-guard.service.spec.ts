import { TestBed, async } from '@angular/core/testing';

import { LoggedInuserAuthGuardService } from './logged-inuser-auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../app/login.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { ActivatedRoute } from '@angular/router';

describe('LoggedInuserAuthGuardService', () => {
  let service: LoggedInuserAuthGuardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
      LoggedInuserAuthGuardService,
      ],
      providers: [LoginService,SocialAuthService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {'id': 'R-100'}}}
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
    service = TestBed.inject(LoggedInuserAuthGuardService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
