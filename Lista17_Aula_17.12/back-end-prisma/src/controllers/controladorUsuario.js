const { PrismaClient } = require("@prisma/client");
const { Usuario } = new PrismaClient();

module.exports = {
    async listarUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findMany({
                // select: {
                //     id: true,
                //     nome: true,
                //     email: true
                // },
                // where: {
                //     id: 1
                // }
            });
    
            if (usuarios.length === 0) {
                return res.status(200).json({mensagem:'Não existem usuários cadastrados!'});
            }
    
            res.status(200).json({usuarios});
        } catch (error) {
            res.join(error);
        }
    },

    async criarUsuario(req, res) {
        const { nome, email } = req.body;
        // console.log(nome, email);

        try {
            let usuario = await Usuario.findUnique({ where: { email } });
            if (usuario) {
                return res.status(401).json({ error: 'E-mail já cadastrado!' });
            }
    
            usuario = await Usuario.create({
                data: {
                    nome,
                    email
                }
            });
    
            res.status(200).json({ mensagem: 'Usuário incluído com sucesso!', usuario });
        } catch (error) {
            res.join(error);
        }
    },

    async buscarUsuarioPorID(req, res) {
        try {
            const { id } = req.params;

            const usuario = await Usuario.findUnique({ where: { id: Number(id) } });
            if (!usuario) {
                return res.status(200).json({mensagem: 'Usuário não encontrado!'});
            }

            res.status(200).json(usuario);
        } catch (error) {
            res.json(error);
        }
    },

    async alterarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome, email } = req.body;

            let usuario = await Usuario.findUnique({ where: { id: Number(id) } });
            if (!usuario) {
                return res.status(200).json({ mensagem: 'Usuário não encontrado!' });
            }

            usuario = await Usuario.update({
                where: { id: Number(id) },
                data: { nome, email }
            });

            res.status(200).json({ mensagem: 'Usuário alterado com sucesso!', usuario });
        } catch (error) {
            res.json(error);
        }
    },

    async excluirUsuario(req, res) {
        try {
            const { id } = req.params;

            const usuario = await Usuario.findUnique({ where: { id: Number(id) } });
            if (!usuario) {
                return res.status(200).json({mensagem: 'Usuário não encontrado!'});
            }

            await Usuario.delete({ where: { id: Number(id) } });
            res.status(200).json({ mensagem: 'Usuário excluído!' });
        } catch (error) {
            res.json(error);
        }
    }
}