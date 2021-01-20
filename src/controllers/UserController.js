
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports ={
    async login(req,res){
        const {password, email, islogged} = req.body;
        
        //vereficando se tem alguem com msmmo email no
        const user = await User.findOne({where:{email}});

        //se exitir retorno uma msg statsu 400 com msg "...."
        if(!user){
            return res.status(400).send({
                status:0,
                message: "Email ou Senha Icorreto!"
            });
        }
        //verificando se as senhas sao inguais
        if(!bcrypt.compareSync(password, user.password)){
            return res.status(400).send({
                status:0,
                message: "Email ou senha Icorreta !"
            })
        }

        const user_id = user.id;

        await User.update({
            islogged
        }, {
            where:{
                id:user_id
            }
        });

        user.password = undefined;

        return res.status(200).send({
            status: 1,
            message: "Usuario Logado Com Sucesso",
            user
        });


    },

    async index(req, res){

        const users = await Users.findAll();

        if(users == "" || users == null){
            return res.status(200).send({message: "Nenhun Usuario encontrado na base"})
        }
        //se econtrar user
        return res.status(200).send({users});

    },
    //inserindo dados no banco atraves do isonia
    async store(req, res){
        const {name, password, email} = req.body
        const user = await User.create({name, password, email});

        return res.status(200).send({
            status: 1,
            message: "User Registered successfully ",
            user
        })
    },
    async update(req, res){
        const {name, password, email} = req.body;
        const {user_id} = req.params;
        await User.update({
            name, password, email
        },{
            where:{
                id: user_id
            }
        });
        return res.status(200).send({
            status: 1,
            message: "User successfully updated"
        })
    },
    async delete(req, res){
        const {user_id} = req.params;
        await User.destroy({
            where:{
                id:user_id
            }
        });

        return res.status(200).send({
            status: 1, 
            message: "User successfully Destroi "
        })

    },

}
