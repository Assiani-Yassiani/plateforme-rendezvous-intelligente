import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent {
  c: any;
  k: any = [];

  constructor(private http: HttpClient) {
    this.c = localStorage.getItem('name');
    this.c = "yassine"
    this.getData();
  }

  getData() {
    this.http.get('http://127.0.0.1:8000/rdm/' + this.c).subscribe((data) => {
      this.k = data;
    });
  }

  g(p: any) {
    console.log(p);
    p['etat'] = "refusé"

    this.http.put('http://127.0.0.1:8000/up/' + p.id + '/', p).subscribe((data) => {
      console.log(data);
      this.getData(); // Refresh the data after deleting
    });
  }
  a(p: any) {
    console.log(p);
    p['etat'] = "accepter"

    this.http.put('http://127.0.0.1:8000/up/' + p.id + '/', p).subscribe((data) => {
      console.log(data);
      this.getData(); // Refresh the data after deleting
    });
  }
}


