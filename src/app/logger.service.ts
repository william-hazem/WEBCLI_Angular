import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Determina quais injetores fornecerão o injetável.
})
export class Logger {
  writeCount(count: number) {
    console.warn(count);
  }
}
