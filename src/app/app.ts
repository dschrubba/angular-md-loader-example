import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from 'src/app/components/header/header';
import { Footer } from 'src/app/components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
