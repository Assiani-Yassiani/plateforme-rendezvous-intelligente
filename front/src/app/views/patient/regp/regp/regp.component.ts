import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-regp',
  templateUrl: './regp.component.html',
  styleUrls: ['./regp.component.css']
})
export class RegpComponent {
  v: any
  constructor(private http: HttpClient) {
    this.v = false
    console.log(this.v)
  }
  d: any



  add(f: any) {
    this.d = f.value
    if (this.d['password'] != this.d['pass']) {
      this.v = true
    }
    this.d['role'] = 'p'
    this.d['spec'] = '*'
    this.d['prix'] = '*'
    this.http.post('http://127.0.0.1:8000/reg/', f.value).subscribe(data => console.log(data))

    console.log(this.d)
  }

}
