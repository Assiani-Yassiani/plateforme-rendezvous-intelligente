import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chatp',
  templateUrl: './chatp.component.html',
  styleUrls: ['./chatp.component.css']
})
export class ChatpComponent {
  c: any;
  k: any = [];
  l: any

  constructor(private http: HttpClient) {
    this.c = localStorage.getItem('name');
    this.getData();
  }

  getData() {
    this.http.get('http://127.0.0.1:8000/msg/' + this.c).subscribe((data) => {
      this.k = data;
      this.l = this.k.length
      console.log(this.l)

    });
  }

  po(form: NgForm) {
    const d = form.value;
    console.log(d);
    d["nome"] = this.c;
    d["nomc"] = "cp";
    console.log(d);
    this.http.post('http://127.0.0.1:8000/m/', d).subscribe(data => {
      console.log(data);
      this.getData(); // Mettre à jour les données
    });
  }
}