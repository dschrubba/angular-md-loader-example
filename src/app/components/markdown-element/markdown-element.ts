import { Component, Input } from '@angular/core';
import { MarkdownItem } from 'src/app/storiesIndex';

@Component({
  imports: [],
  selector: 'app-markdown-element',
  styleUrl: './markdown-element.scss',
  templateUrl: './markdown-element.html',
})
export class MarkdownElement {

  @Input() md: MarkdownItem | undefined;

}
