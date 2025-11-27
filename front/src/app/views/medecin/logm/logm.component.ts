import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logm',
  templateUrl: './logm.component.html',
  styleUrls: ['./logm.component.css']
})
export class LogmComponent {
  f: any
  l: any
  constructor(private http: HttpClient, private router: Router) {
    this.f = false
    this.l = false
    localStorage.setItem("name", "hhh")
    this.c = localStorage.getItem("name")
    console.log(this.c)
  }
  d: any

  c: any

  add(f: any) {
    this.d = f.value






    this.http.post('http://127.0.0.1:8000/logm/', this.d).subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        const m = data[0];
        console.log(m)
        if (m == "ne") { this.l = true }
        if (m == "nc") { this.f = true }
        if (m == "s") {

          this.router.navigate(['/patient']);
        }
      }
    });
    console.log(this.d)
  }
}


