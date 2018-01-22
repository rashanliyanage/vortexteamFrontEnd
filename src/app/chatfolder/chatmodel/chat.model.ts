export class ChatMessage {
    $key?: string;
    // eventId?:string;
    email?: string;
    userName?: string;
    message?: string;
    timeSent?: Date = new Date();
}