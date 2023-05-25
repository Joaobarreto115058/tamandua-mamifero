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

server.post('/cadastro', async(request : any, reply: any) => {
    const tamandua = await prisma.tamandua.create({
        data: {
            nome: request.body.nome, 
            caracteristica: request.body.caracteristica,
            alimentado: request.body.alimentado,
            idade: request.body.idade
        }
      })
    return reply.status(201).send(tamandua);
});

server.get('/buscar', async(request: any, reply:any) => {
    const tamandua = await prisma.tamandua.findMany()

    return tamandua;
})

server.put('/update', async(request: any, reply: any) =>{
    const nome = await prisma.tamandua.update({
        where: {
            nome: request.body.nome
        },
        data: {
            nome: request.body.nome,
            caracteristica: request.body.caracteristica,
            alimentado: request.body.alimentado,
            idade: request.body.idade
        }
    })
})

server.delete('/delete/:IdAnimal', async(request: any, reply: any) =>{
    const tamandua = await prisma.tamandua.delete({
        where: {
            nome: request.body.nome
        }
    })
    return "animal deletado";
}) 

server.listen({ port }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log(`servidor está rodando em ${address}`);
    }
});