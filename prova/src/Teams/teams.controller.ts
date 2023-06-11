import { Request, Response } from 'express'
import { TeamService } from './teams.service'

export class TeamController {
    async create(req: Request, res: Response) {
        const team = await new TeamService().create(req.body)

        return res.status(200).json(team)
    }

    async list(req: Request, res: Response) {
        const teams = await new TeamService().list()

        return res.status(200).json(teams)
    }
    
    async find(req: Request, res: Response) {
        const team = await new TeamService().find(req.params.trainerName)

        return res.status(200).json(team)
    }

    async update(req: Request, res: Response) {
        const team = await new TeamService().update(req.params.trainerName, req.body)

        return res.status(200).json(team)
    }


    async delete(req: Request, res: Response) {
        const team = await new TeamService().delete(req.params.trainerName)

        return res.status(200).json("Sucessfuly deleted team!!")
    }
}

export default new TeamController()

