import prismaClient from "../prisma";

class CreateCostumerService{
    async execute(){
        console.log("ROTA FOI CHAMADA")
        return{ok:true}
    }
}
export{CreateCostumerService}