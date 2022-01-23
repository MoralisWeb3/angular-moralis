import { Injectable } from '@angular/core';
import { Moralis } from 'moralis';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProviderTypes, User } from '../models/moralis.models';
import { publishReplayRefCount } from '../utils/rxjs.utils';

interface IMoralisService {
  user$: Observable<User | undefined>;
  isAuthenticated$: Observable<boolean>;
  authenticate: (provider: ProviderTypes, signingMessage: string) => void;
  logout: () => void;
}

@Injectable()
export class MoralisService implements IMoralisService {
  private userSubject = new BehaviorSubject<User | undefined>(
    Moralis.User.current()
  );

  user$ = this.userSubject.asObservable().pipe(
    tap((loggedInUser) =>
      console.info(`Current user: ${loggedInUser?.attributes['username']}`)
    ),
    publishReplayRefCount()
  );

  isAuthenticated$ = this.user$.pipe(
    map((user) => !!user),
    publishReplayRefCount()
  );

  constructor() {}

  authenticate(provider: ProviderTypes, signingMessage: string) {
    (provider === 'metamask'
      ? Moralis.authenticate({ signingMessage })
      : Moralis.authenticate({ signingMessage, provider })
    )
      .then((loggedInUser) => {
        this.userSubject.next(loggedInUser);
      })
      .catch((e) => console.error(`Moralis '${provider}' login error:`, e));
  }

  logout() {
    Moralis.User.logOut()
      // Set user to undefined
      .then(() => this.userSubject.next(undefined))
      // Disconnect Web3 wallet
      .then(() => Moralis.cleanup())
      .catch((e) => console.error('Moralis logout error:', e));
  }
}
