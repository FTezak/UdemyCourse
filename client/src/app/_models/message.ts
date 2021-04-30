export interface Message {
    id: number;
    senderId: number;
    senderUsername: string;
    senderPhotoUrl: string;
    recitientId: number;
    recipientUsername: string;
    recipientPhotoUrl: string;
    content: string;
    dateRead?: Date;
    messageSent: Date;
}