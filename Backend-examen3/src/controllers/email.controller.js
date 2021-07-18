import { pool } from '../database';
import { transporter } from '../libs/helper.email';

export const email = async(req, res)=>{
    try {
        const{ destinario,titulo,mensaje,fecha,idusuario} = req.body;
        await transporter.sendMail({
            from: '"DAD 👻" <carlosanamuroventura@gmail.com>', // sender address
            to: destinario, // list of receivers
            subject: titulo, // Subject line
            html: "<b>"+mensaje+"</b>", // html body
          });
         await pool.query('INSERT INTO correo (destinario,titulo,mensaje,fecha,idusuario) values($1,$2,$3,$4,$5)',
             [destinario,titulo,mensaje,fecha,idusuario])
          return res.status(200).json('correo enviado correctamente...!');
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }

   
}

export const readAllCorreo = async(req, res)=>{
    try {
        const response = await pool.query('select * from correo');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const delCorreo = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from correo where idcorreo=$1', [id]);
        return res.status(200).json(
            `Correo ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}