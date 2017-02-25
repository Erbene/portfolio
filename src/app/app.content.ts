/**
 * Created by erb on 17/02/17.
 */
import {Injectable} from '@angular/core';
export interface Section {
  name: string;
}
export const CONTENT = {
  sections: [
    {
      name: "About"
    }, {
      name: "Portfolio"
    }]
}

@Injectable()
export class PortfolioContent {
  getSections(): Section[] {
    return CONTENT.sections;
  }
}
