import { type } from "os";

export type tLocation = {
    name: string,
    location: {
        lat: number,
        long: number,
    }
}

export const locations = [
    {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
    {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
    {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
    {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
    {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
    {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
] as tLocation[]

type tNumArrArr = tNumArrArr[] | number[];

class Statics_numArrArr{
    static getSize(ndarr: tNumArrArr | number){
        let size: number[] = []
        let cont: boolean = true;
        let inner = ndarr;
        while(cont){
            if(typeof inner == "number"){
                if(size.length == 0){
                    return [1];
                }else{
                    return size;
                }
            }
            let len = inner.length;
            switch(len){
                case 0:
                    cont = false;
                    break;
                case 1:
                    size.push(1);
                    cont = false;
                    break;
                default:
                    size.push(len);
                    inner = inner[0];
            }
        }
        return size;
    }
    
    static isMatrix(mat: tNumArrArr){
        if([1,2].includes( this.getSize(mat).length )){
            return true
        }
        return false
    }

    static isVect(mat: tNumArrArr){
        return(Array.isArray(mat));
    }

    static matMult(mat1: tNumArrArr, mat2: tNumArrArr){
        let result: tNumArrArr = [];
        if( !this.isMatrix(mat1) ||
            !this.isMatrix(mat2) ||
            !( this.getSize(mat1)[1] == this.getSize(mat2)[0] ) 
        ){
            return result;
        }
    }

    static dotProd(v1: tNumArrArr, v2: tNumArrArr ){
        
    }
}

export default class App{
    static toLocationsMatrix(locations: tLocation[]){
        let matrix: Number[][] = [];
        locations.forEach((val)=>{
            matrix.push([val.location.lat, val.location.long])
        })
        return matrix
    }
    static closestLocation(lat: number, long: number){
    }
}