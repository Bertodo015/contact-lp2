import { Contact } from "./models/Contact";

const contact = new Contact();

try {
    //Acessa o setter de _name
    contact.name = "Bert";
} catch(erro) {
    console.log(erro);
    console.log("Mal feito desfeito");
    
}

//Acessa o getter de _name
const contactName = contact.name;
console.log(contactName);
