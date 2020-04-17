export class SignalRLightPoint {
    public lightPointNumber: number;
    public lightPointStatus: boolean;
 

    constructor(lightPointNumber: number, lightPointStatus: boolean){
        this.lightPointNumber = lightPointNumber;
        this.lightPointStatus = lightPointStatus;
    }
}