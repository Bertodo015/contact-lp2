import { ContactErrorMessages } from "../enums/ContactErrorMessages";

export class ContactCreationError extends Error {
    constructor(message: ContactErrorMessages) {
        super(message);
    }
}