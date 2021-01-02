import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { SignalRLightControlClientService } from './signalR-light-control-client.service';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

 recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;

  constructor(private signalRLightControlClientService: SignalRLightControlClientService ) { }

  init() {
    this.recognition.interimResults = false;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      if(transcript == 'power on'){
        this.signalRLightControlClientService.sendLightPointStatus('ad29d667-65a9-4edd-b6d0-c9e533292b50',true);
      }else if(transcript == 'power off'){
        this.signalRLightControlClientService.sendLightPointStatus('ad29d667-65a9-4edd-b6d0-c9e533292b50',false);
      }
      console.log(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }

  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }
}