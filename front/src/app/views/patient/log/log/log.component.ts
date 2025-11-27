import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  f: any
  l: any
  constructor(private http: HttpClient, private router: Router) {
    this.f = false
    this.l = false
  }
  d: any



  add(f: any) {
    this.d = f.value






    this.http.post('http://127.0.0.1:8000/log/', this.d).subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        const m = data[0];
        console.log(m)
        if (m == "ne") { this.l = true }
        if (m == "nc") { this.f = true }
        else {
          localStorage.setItem("name", m["name"])
          this.router.navigate(['/patient']);
        }
      }
    });
    console.log(this.d)
  }
}
