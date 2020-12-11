import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AppService {
    public sideBarStatus = new EventEmitter();
    constructor(){

    }
}