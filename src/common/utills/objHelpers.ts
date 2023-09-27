import {UsersType} from "common/api/api";

type newObjProType = {
    id?: string,
    name?: string,
    status?: string,
    followed?: boolean,
}

export const updObjInArray = (items:UsersType[], itemId:string,  newObjProp:newObjProType) => {
    return items.map(u => u.id === itemId ? {...u, ...newObjProp} : u);
}

// export const updObjInArray = (items:UsersType[], itemId:string, objPropName newObjProp:newObjProType) => {
//     return items.map(u => u[objPropName] === itemId ? {...u, ...newObjProp} : u);
// }