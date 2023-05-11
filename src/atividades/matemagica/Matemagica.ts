import { ErrorMessages } from "../../errorMessages"

export class Matemagica{
    private sum(a, b) {
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessages.PARAM_ERROR
        }
        return Number(a) + Number(b)
    }
    private div(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessages.PARAM_ERROR
        }
        return Number(a) / Number(b)
    }

    private sub(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessages.PARAM_ERROR
        }
        return Number(a) - Number(b)
    }

    private multi(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessages.PARAM_ERROR
        }
        return Number(a) * Number(b)
    }

    getSum(a, b){
        return this.sum(a, b)
    }
    getDiv(a, b){
        return this.div(a, b)
    }
    getSub(a, b){
        return this.sub(a, b)
    }
    getMulti(a, b){
        return this.multi(a, b)
    }
}