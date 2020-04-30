import Ticket from '../models/Ticket';

export default {
  create: async (req, res) => {
    const result = await Ticket.create({ ...req.body });
    return res.status(200).json({
      ticket: result.dataValues,
    });
  },
};
