export class person{
    id?: number;
    name: string;
    surname: string;
    about_me: string;
    email: string;
    photo_url: string;
    description: string;

    constructor(name:string, surname:string, about_me:string, email:string, photo_url:string, description:string) {
        this.name = name;
        this.surname = surname;
        this.about_me = about_me;
        this.email = email;
        this.photo_url = photo_url;
        this.description = description;
    }
}