import { Observable, ReplaySubject, share } from 'rxjs';

/**
 * Docs: https://rxjs.dev/deprecations/multicasting#publishreplay
 */
export const publishReplayRefCount =
  <R>() =>
  (source: Observable<R>) =>
    source.pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnError: false,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      })
    );
