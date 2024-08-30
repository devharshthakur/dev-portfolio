/* class ensures that when a request is made, 
the data it contains (name, email, message) is structured as expected. */

export class CreateContactDto {
    name:string;
    email:string;
    message:string;
}