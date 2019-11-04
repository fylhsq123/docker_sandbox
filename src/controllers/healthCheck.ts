import {Get, Route} from 'tsoa';
import {AbstractController} from './abstractController';
import httpStatusCodes from 'http-status-codes';

@Route('')
export class HealthCheck extends AbstractController {
    constructor() {
        super();
    }

    @Get('/health')
    health() {
        this.setStatus(httpStatusCodes.OK);
        return 'OKay';
    }

    @Get('/fail')
    fail() {
        throw Error('Error');
    }
}