import { Guid } from 'guid-typescript';
import { LightPoint } from './light-point.model';

export class HomeLightSystem {
    public id : Guid;
    public lightPoints : LightPoint[];
}