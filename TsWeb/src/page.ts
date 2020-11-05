console.log('armin');

import { Header, Content, Footer } from './components'
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}

