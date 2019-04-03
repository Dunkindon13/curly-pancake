import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DadJokeService} from "../../models/dad-joke.service";

@Component({
  selector: 'app-dad',
  templateUrl: './dad-joke.component.html',
  styleUrls: ['./dad-joke.component.scss']
})
export class DadJokeComponent implements OnInit {
  dadJokeUrl: string;

  constructor(private dadJokeFetcher: DadJokeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dadJokeFetcher.getRandomDadJoke().subscribe((result) => {
        this.dadJokeUrl = result.message;
      }
    );
  }

}
