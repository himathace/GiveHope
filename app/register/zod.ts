import {z} from "zod"

export const userschema=z.object({
    username:z.string().min(1,"name is required"),
    email:z.string().email("invalid email"),
    password:z.string().min(6,"password must be 6 chareactes long")
})

export type usertype=z.infer<typeof userschema>