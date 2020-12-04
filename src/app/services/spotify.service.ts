import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }
   getNewReleases(){
       const headers = new HttpHeaders({
         'Authorization':'Bearer BQDttPGTKNCcwBLxh5CHJwZjufZrKQgyphB7iltrg06W93LJPBsincw6dlUjRa0kf9E7n6LgHi0UZDTO6BU'
       })
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
     
   }
}
