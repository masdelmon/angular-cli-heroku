import { Component } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
 
@Component({
  selector: 'video-component',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
 
  youtubeId = 'iHhcHTlGtRs';
 
  constructor(private embedService: EmbedVideoService) {
    console.log(this.embedService.embed(this.youtubeUrl));
    console.log(this.embedService.embed_youtube(this.youtubeId));
  }
}
