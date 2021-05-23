export class SignalRLightPoint {
    //should be lightPointId
    public lightPointNumber: any;
    public lightPointStatus: boolean;
    public lightPointCustomName: string;

    constructor(lightPointNumber: any, lightPointStatus: boolean, lightPointCustomName : string){
        this.lightPointNumber = lightPointNumber;
        this.lightPointStatus = lightPointStatus;
        this.lightPointCustomName = lightPointCustomName;
    }
}