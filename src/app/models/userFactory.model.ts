import { Shopper } from "./shopper.model";
import { Employee } from "./employee.model";

export class UserFactory{
    /**
    * Builds an User from json response
    * @param {any} userObj
    * @return {User}
    */
    static buildUser(userObj: any, money=0, type?: string, employer?: string): any {
    if (type === 'employee') {

        return new Employee(
            userObj.firstName,
            userObj.lastName,
            money,
            employer
            );
    } else {
        return new Shopper(
           userObj.firstName,
           userObj.lastName, 
           money
        )
    }
    }
    }
    