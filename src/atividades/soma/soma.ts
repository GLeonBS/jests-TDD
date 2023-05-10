import { ErrorMessages } from "../../errorMessages"

export class counts{
    private sum(a, b) {
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessages.PARAM_ERROR
        }
        return Number(a) + Number(b)
    }
}