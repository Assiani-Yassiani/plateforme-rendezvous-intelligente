import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crdv',
  templateUrl: './crdv.component.html',
  styleUrls: ['./crdv.component.css']
})
export class CrdvComponent {
  c: any;
  k: any = [];

  constructor(private http: HttpClient) {
    this.c = localStorage.getItem('name');
    this.getData();
  }

  getData() {
    this.http.get('http://127.0.0.1:8000/rdv/' + this.c).subscribe((data) => {
      this.k = data;
    });
  }

  g(id: any) {
    console.log(id);

    this.http.delete('http://127.0.0.1:8000/s/' + id + '/').subscribe((data) => {
      console.log(data);
      this.getData(); // Refresh the data after deleting
    });
  }
}
