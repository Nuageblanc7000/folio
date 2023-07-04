import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as confetti from 'canvas-confetti';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ErrorMessage } from '../shared/interface/ierrorMessage.interface';
import { ContactService } from '../shared/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('queryAnimation', [
      transition(':enter', [
        query(
          '.typping',
          [
            style({
              opacity: 0,
              transform: 'translateX(80px)',
            }),

            stagger(100, [animate(500)]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ContactComponent {
  exp: string = '';
  @ViewChild('confettiCanvas', { static: true })
  confettiCanvasRef!: ElementRef<HTMLCanvasElement>;
  private myConfetti!: confetti.CreateTypes;
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(8);
  private subscription: Subscription = new Subscription();
  private timeout: undefined | any = undefined;
  formContact!: FormGroup;
  msgEmail: string = '';
  msgName: string = '';
  msgMessage: string = '';
  isSendMessage: Observable<boolean> = this.contactService.isSending$;
  unsubscribe: Subscription = new Subscription();
  validationMessageErrors: ErrorMessage = {
    required: 'Ce champ est requis',
    email: 'Entrer un email valide',
    maxlength: 'Le champ est trop long',
  };

  constructor(
    private _fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.formContact = this._fb.group({
      message: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    if (this.formContact.valid) {
      console.log(this.formContact.value);
      this.unsubscribe.add(
        this.contactService.sendMessage(this.formContact.value).subscribe({
          next: () => {
            this.contactService.isSending$.next(false);
          },
          error: (err) => console.log(err),
        })
      );
    } else {
      this.formContact.markAllAsTouched();
    }
  }
  ngAfterViewInit() {
    this.myConfetti = confetti.create(this.confettiCanvasRef.nativeElement, {
      resize: true,
      useWorker: true,
    });
    this.triggerConfetti();
  }

  //créer un pipe
  hasError(controlName: string, validationError: string): boolean {
    const control = this.formContact.get(controlName);
    const errors = control?.errors;

    if (errors && validationError in errors) {
      return (
        control.hasError(validationError) && (control.touched || control.dirty)
      );
    }

    return false;
  }
  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
    clearInterval(this.timeout);
  }
  triggerConfetti() {
    this.timeout = setInterval(() => {
      const observable = this.count.next(this.count.value - 1);
      const duration = 10 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 800,
        ticks: 60,
        zIndex: 0,
      };
      const timeLeft = animationEnd - Date.now();
      const particleCount = 400 * (timeLeft / duration);

      if (this.count.value <= 0) {
        clearInterval(this.timeout);
        this.subscription.add(observable);
      }
      this.myConfetti({
        ...defaults,
        particleCount,
        origin: { x: this.randomInRange(0.3, 0.6), y: Math.random() - 0.1 },
      });
    }, 1000);
  }

  randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  //partie form
}
