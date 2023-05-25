import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const port: any = process.env.PORT

const prisma = new PrismaClient();

const server = fastify();

server.register(cors, {
    //opções
})

server.post('/signup', async(request : any, reply: any) => {
    const tamandua = await prisma.puma.create({
        data: {
            nome: request.body.nome, 
            caracteristica: request.body.caracteristica,
            alimentado: request.body.alimentado,
            idade: request.body.idade
        }
      })
    
    return reply.status(201).send(tamandua);
});

server.listen({ port }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log(`servidor está rodando em ${address}`);
    }
});