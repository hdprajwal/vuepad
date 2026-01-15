import 'pinia'
import { db } from '@/db'  

declare module 'pinia' {
    export interface PiniaCustomProperties {
        db: db
    }
}