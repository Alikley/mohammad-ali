export interface Rolestudent{
    id:number;
    archeType:string;
    description:string;
    name:string;
    userRole:string;
}
export interface Studentinfo{
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    roles: RolesStudent[];
    city: string;
    email: string;
    mobile: string;
    phone: string;
    username: string;
}