import { defineStore } from 'pinia'
export const useMessageStore = defineStore('message', {
    state: () => ({
        message: '' as string
    })
}) 