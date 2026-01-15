import { db } from "@/db";
import type { PiniaPluginContext } from 'pinia';

export function dexiePlugin({ store }: PiniaPluginContext) {
    store.db = db;
}