export class User {
    // short hand sentax typescript generat public field to every public constructor paramter
    //when create new user assign to value it so genrate public field to public only
    constructor
    (   public fullName:string,
        public emailAddress:string,
        public password:string,
        public Confpassword:string


    ){}
}
