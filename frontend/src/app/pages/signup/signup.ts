import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],  // ✅ Add HttpClientModule here
})
export class SignupComponent {
  signupForm: FormGroup;
  passwordMismatch: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    const { name, email, password, confirmPassword } = this.signupForm.value;
    this.passwordMismatch = password !== confirmPassword;

    if (this.signupForm.valid && !this.passwordMismatch) {
      const payload = { name, email, password };

      this.http.post('http://localhost:3500/api/auth/register', payload)
        .pipe(
          catchError(error => {
            console.error('Signup error:', error);
            alert('Signup failed.');
            return of(null);
          })
        )
        .subscribe(response => {
          if (response) {
            console.log('Signup success:', response);
            alert('Signup successful!');
            this.signupForm.reset();
          }
        });
    }
  }
}
