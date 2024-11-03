import { Component, OnInit } from '@angular/core';
import { UrlService, ShortenedLink } from '../../services/url.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  originalUrl: string = ''; 
  shortenedLink: ShortenedLink | null = null; 
  allShortenedLinks: ShortenedLink[] = []; 

  constructor(private urlShortenerService: UrlService) {}

  ngOnInit(): void {
    this.loadAllShortenedLinks();
  }

  loadAllShortenedLinks(): void {
    this.urlShortenerService.getAllShortenedLinks().subscribe(
      (links) => {
        this.allShortenedLinks = links;
        console.log('All shortened URLs:', links);
      },
      (error) => console.error('Error fetching all shortened links:', error)
    );
  }

  createShortUrl(): void {
    if (this.originalUrl.trim()) {
      this.urlShortenerService.createShortUrl(this.originalUrl).subscribe(
        (response) => {
          this.shortenedLink = response; 
          console.log('Shortened URL:', response);

          this.loadAllShortenedLinks();
        },
        (error) => {
          console.error('Error creating short URL:', error);
          this.shortenedLink = null;
        }
      );
    }
  }
}
