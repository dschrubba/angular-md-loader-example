import { marked } from 'marked';

import test from 'src/app/markdown/test.md';

export interface MarkdownItem {
  title: string;
  date: string;
  approximateDate: boolean;
  htmlContent: string;
}

export const storiesIndex: MarkdownItem[] = [
  {
    title: 'Markdown Test Element',
    date: '2026-09-18',
    approximateDate: true,
    htmlContent: marked.parse(test).toString(),
  },
];
