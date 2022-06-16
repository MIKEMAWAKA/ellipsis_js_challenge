import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-component',
  templateUrl: './movies-component.component.html',
  styleUrls: ['./movies-component.component.css']
})
export class MoviesComponentComponent implements OnInit {

  private _jsonURL = 'assets/feed/sample.json';

  constructor(private http: HttpClient) { }
  Movies:any = [];
  loading= true;
  error= false;



  ngOnInit(): void {
    this.getsample().subscribe(data => {
      // this.Series = data.entries;
      // console.log(this.Series);
      // this.Series=  data.entries.where("releaseYear", ">=", 2010)
      // .where("programType", "==", 'series')
      //   console.log(this.Series);
        this.Movies = data.entries.filter(sr => sr.programType == 'movie').filter(sr => sr.releaseYear >= '2010')
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
