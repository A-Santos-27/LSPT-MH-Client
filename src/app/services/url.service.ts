// src/app/services/url.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShortenedLink {
  originalUrl: string;
  shortUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private apiUrl = 'https://localhost:7163/api/URL';

  constructor(private http: HttpClient) {}

  getAllShortenedLinks(): Observable<ShortenedLink[]> {
    return this.http.get<ShortenedLink[]>(`${this.apiUrl}/all`);
  }

  createShortUrl(originalUrl: string): Observable<ShortenedLink> {
    const urlDto = { originalUrl };
    return this.http.post<ShortenedLink>(`${this.apiUrl}/shorten`, urlDto);
  }
}
