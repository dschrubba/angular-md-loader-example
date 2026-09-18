import { Service } from '@angular/core';
import { storiesIndex, MarkdownItem } from '../../storiesIndex';

@Service()
export class MdService {
  public getStories(): MarkdownItem[] {
    return storiesIndex;
  }

  public getStoryByTitle(title: string, caseSensitive = false): MarkdownItem | undefined {
    return storiesIndex.find((s) =>
      !caseSensitive ? s.title : s.title.toLowerCase() === (!caseSensitive ? title : title.toLowerCase()),
    );
  }
}
