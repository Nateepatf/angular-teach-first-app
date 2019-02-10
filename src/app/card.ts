export class Card {
    firstname: string;
    lastName: string;
    votes: number;
    constructor(
        firstname: string,
        lastName: string,
        votes: number
    ){
        this.firstname = firstname;
        this.lastName = lastName;
        this.votes = votes;
    }
    get name(): string {
        return this.firstname+' '+this.lastName
    }
}
