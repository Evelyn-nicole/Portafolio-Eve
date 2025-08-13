// src/app/pages/intro/intro.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';   // 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, OnDestroy {

  // 1) Título: cámbialo por tu nombre si quieres
  nombrePrincipal = 'Evelyn-Santibañez';
  nombreChars: string[] = [];

  // 2) Subtítulo con máquina de escribir
  frases = [
    'Desarrolladora Full Stack Jr.',
    'Aprendiz constante',
    'Creativa y resiliente'
  ];
  typedText = '';
  private phraseIndex = 0;
  private charIndex = 0;
  private typing = true;
  private loopTimeout: any;

  ngOnInit(): void {
    // separar el título en letras para animarlas en el HTML
    this.nombreChars = this.nombrePrincipal.split('');
    // iniciar el bucle de tipeo
    this.startTypingLoop();
  }

  ngOnDestroy(): void {
    clearTimeout(this.loopTimeout);
  }

  private startTypingLoop() {
    const current = this.frases[this.phraseIndex];

    if (this.typing) {
      // escribiendo
      if (this.charIndex < current.length) {
        this.typedText += current[this.charIndex];
        this.charIndex++;
        this.loopTimeout = setTimeout(() => this.startTypingLoop(), 80); // velocidad de tipeo
      } else {
        // pausa al final de la frase
        this.typing = false;
        this.loopTimeout = setTimeout(() => this.startTypingLoop(), 1200);
      }
    } else {
      // borrando
      if (this.charIndex > 0) {
        this.typedText = this.typedText.slice(0, -1);
        this.charIndex--;
        this.loopTimeout = setTimeout(() => this.startTypingLoop(), 40); // velocidad al borrar
      } else {
        // siguiente frase
        this.typing = true;
        this.phraseIndex = (this.phraseIndex + 1) % this.frases.length;
        this.loopTimeout = setTimeout(() => this.startTypingLoop(), 200);
      }
    }
  }
}
