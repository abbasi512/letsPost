
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client"

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
){
    try {
        const post = JSON.parse(req.body)
        if(req.method==="POST"){
            if(!post.title.length){
                res.status(500).json({message:"post title can't be empty"})
                return
            }
            try {
                const data = await prisma.post.create({
                    data:{
                        title:post.title
                    }
                })
                return res.status(200).json(data)
            } catch (error) {
                return res.status(500).json({message:"error creating post"})
            }
        }
    } catch (error) {
        return res.status(500).json("error")
    }
}