import { Component, inject } from '@angular/core';
import { MdService } from 'src/app/services/mdService/md-service';
import { Sidebar } from 'src/app/components/sidebar/sidebar';
import { MarkdownElement } from 'src/app/components/markdown-element/markdown-element';

@Component({
  imports: [Sidebar, MarkdownElement],
  selector: 'app-view-home',
  styleUrl: './view-home.scss',
  templateUrl: './view-home.html',
})
export class ViewHome {
  private readonly mdService: MdService = inject(MdService);

  protected readonly stories = this.mdService.getStories();
}
