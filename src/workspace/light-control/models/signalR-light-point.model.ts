export class SignalRLightPoint {
    public lightPointNumber: number;
    public lightPointStatus: boolean;
    public lightMqttId: string;

    constructor(lightPointNumber: number, lightPointStatus: boolean,lightMqttId: string){
        this.lightMqttId = lightMqttId;
        this.lightPointNumber = lightPointNumber;
        this.lightPointStatus = lightPointStatus;
    }
}