import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-pdvm',
  templateUrl: './pdvm.component.html',
  styleUrls: ['./pdvm.component.css']
})
export class PdvmComponent {
  n: any
  names: any

  constructor(private http: HttpClient) {

    this.names = ['h']
  }
  s: any
  add(f: any) {
    this.n = f.value
    this.n["nomp"] = localStorage.getItem("name")
    this.n['etat'] = 'En attend'
    console.log(f.value)
    this.http.post('http://127.0.0.1:8000/prdv/', this.n).subscribe(data => console.log(data))


  }
  h: any
  k: any = []
  g(r: any) {

    this.h = { spec: "" }
    this.h['spec'] = r
    console.log(this.h)
    this.http.post('http://127.0.0.1:8000/g/', this.h).subscribe(data => this.k = data
    )



  }




}
