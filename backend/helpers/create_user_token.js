const jwt =require('jsonwebtoken')
const createUserToken = async (user,req,res) =>{

    const token = jwt.sign({
        name: user.name,
        id: user._id
    },"nossosecredo")

    res.status(200).json({
        menssage: "Usuário logado com sucesso",
        token: token,
        userId: user._id
    })

}

module.exports = createUserToken