import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-series-component',
  templateUrl: './series-component.component.html',
  styleUrls: ['./series-component.component.css']
})
export class SeriesComponentComponent implements OnInit {
  private _jsonURL = 'assets/feed/sample.json';

  constructor(private http: HttpClient) { }
  Series:any = [];
  Seriesfil:any = [];
  loading= true;
  error= false;


  ngOnInit(): void {
    this.getsample().subscribe(data => {

        this.Series = data.entries.filter(sr => sr.programType == 'series').filter(sr => sr.releaseYear >= '2010')
        .sort((a,b) => a.title.localeCompare(b.title)).slice(0,21);
        
        this.loading = false;
      //   console.log(this.Series);
      // console.log(this.Series[0].images[ 'Poster Art' ].url);
     });

  }

  public getsample(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
