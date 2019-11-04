import {HealthCheck} from './healthCheck';

class Controllers {
    healthCheck: HealthCheck;

    constructor() {
        this.healthCheck = new HealthCheck();
    }
}

export {Controllers};