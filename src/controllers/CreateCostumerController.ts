
import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCostumerService } from '../services/CreateCostumerService'

class CreateCostumerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const customerService = new CreateCostumerService(); // Corrigindo nome da variável para 'customerService'
        const customer = await customerService.execute(); // Corrigindo o nome da variável para 'customer'
        reply.send(customer); // Enviando a resposta com o objeto 'customer'
    }
}

export default CreateCostumerController; // Exportando a classe para uso externo
