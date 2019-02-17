import { Component } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
 
@Component({
  selector: 'video-component',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  yt_iframe_html:any;
  youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
 
  constructor(private embedService: EmbedVideoService) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
  }
}
