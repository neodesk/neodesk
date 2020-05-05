import Ticket from '../models/Ticket';

export default {
  index: async (req, res) => {
    const tickets = await Ticket.findAll();
    return res.render('user/tickets', {
      tickets,
    });
  },
  create: async (req, res) => {
    const { title, description } = req.body;
    await Ticket.create({
      title,
      description,
      main_ticket: 0,
      status: 0,
      user_id: 1,
      user_address_id: 1,
      user_organization_id: 1,
      type_id: 7,
      service_level_agreements_id: 2,
      operator_groups_id: 2,
    });
    const tickets = await Ticket.findAll({
      include: [
        {
          all: true,
        },
      ],
      raw: true,
      nest: true,
    });

    return res.status(200).render('user/tickets', {
      tickets,
    });
  },
};
