import { Request, Response } from 'express';
import Manager from '../models/manager';

export const getManagers = async (req: Request, res: Response) => {
    const listManagers = await Manager.findAll()

    res.json(listManagers)
}

export const getManager = async (req: Request, res: Response) => {
    const { id } = req.params;
    const manager = await Manager.findByPk(id);

    if (manager) {
        res.json(manager)
    } else {
        res.status(404).json({
            msg: `No existe un manager con el id ${id}`
        })
    }
}

export const deleteManager = async (req: Request, res: Response) => {
    const { id } = req.params;
    const manager = await Manager.findByPk(id);

    if (!manager) {
        res.status(404).json({
            msg: `No existe un manager con el id ${id}`
        })
    } else {
        await manager.destroy();
        res.json({
            msg: 'El manager fue eliminado con exito!'
        })
    }

}

export const postManager = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Manager.create(body);

        res.json({
            msg: `El manager fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateManager = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const manager = await Manager.findByPk(id);

    if(manager) {
        await manager.update(body);
        res.json({
            msg: 'El manager fue actualizado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un manager con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}