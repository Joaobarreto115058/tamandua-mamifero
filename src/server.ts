import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();



const server = fastify();

server.register(cors, {
    //opções
})

server.listen({ port:3000 }, (error, address) => {
    if (error) {
        console.error(error);
       
    } else {
        console.log(`servidor está rodando em ${address}`);
    }
});