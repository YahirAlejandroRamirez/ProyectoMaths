import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafeUrlPipe', () => {
  let pipe: SafeUrlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    // Configura el módulo de prueba e inyecta DomSanitizer
    TestBed.configureTestingModule({
      providers: [DomSanitizer]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafeUrlPipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sanitize a URL', () => {
    const unsafeUrl = 'https://www.example.com';
    const safeUrl = pipe.transform(unsafeUrl);
    expect(safeUrl).toBeTruthy();
  });
});
