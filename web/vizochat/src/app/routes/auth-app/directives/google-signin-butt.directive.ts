import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login'
import { take } from 'rxjs';
declare var google:any;
@Directive({
  selector: 'google-signin-butt'
})
export class GoogleSigninButtDirective implements OnInit{

  @Input('selectable') option: boolean | undefined;
  constructor(private el: ElementRef, private socialAuthService: SocialAuthService) { }

  ngOnInit() {
    if (!this.option) return;
    this.socialAuthService.initState.pipe(take(1)).subscribe(() => {
        google.accounts.id.renderButton(this.el.nativeElement, {
            type: 'standard',
            size: 'large',
            text: 'signin_with',
            theme: 'filled_blue'
        });
    });
}
}
