import {z} from "zod"

export const userschema=z.object({
    username:z.string().min(1,"Full Name is required"),
    email:z.string().min(1,"Email is required").email("invalid email"),
    password:z.string().min(8,"password must be 8 chareactes long")
})

export type usertype=z.infer<typeof userschema>