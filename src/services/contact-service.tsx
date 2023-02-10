import { IContact } from "../models/contact";
import { supabase } from "../utils/supabase-utils";

const TABLE_NAME = 'contact';

export function contactService() {
    return {
        sendContact(contact: IContact) {
            return supabase.from(TABLE_NAME).insert(contact);
        }
    }
}