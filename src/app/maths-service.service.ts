import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsServiceService {

  calculateCube(no:number)
  {
    return no *no*no
  }

}
