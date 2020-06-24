import User from '../models/User';
import Operator from '../models/Operator'
import Job from '../models/Job'


export default {
  index: async (req, res) => {
    return res.render('access/login');
  },
  show: async (req, res) => {
    const {
      login,
      senha,
      type_user
    } = req.body;
    if (type_user === "0") {
      try {
        var logged = await User.findOne({
          where: {
            email: login,
          }
        });
      } catch (error) {
        var logged = "Deu erro" + error;
      }
      if (logged == null || logged.password_hash !== senha) {
        return res.render("access/login", {
          msg: "Email ou senha incorretos!",
        });
      } else {
        req.session.user = logged;
        return res.redirect("/user")
      }
    } else if (type_user === "1") {
      try {
        var logged = await Operator.findOne({
          where: {
            email: login,
          },
          include: {
            model: Job,
            as: 'operator_job',
            require: true
          }
        });
      } catch (error) {
        console.log("O erro foi " + error)
      }
      if (logged == null || logged.password_hash !== senha) {
        return res.render("access/login", {
          msg: "Email ou senha incorretos!",
        });
      } else {
        req.session.operator = logged;
        return res.redirect("/operator")
      }
    }
  },
  destroy: async (req, res) => {
    req.session.destroy();
    console.log(req.session)
    return res.redirect('/login');
  },
  create: async (req, res) => {
    const {
      title,
      description
    } = req.body;
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
      include: [{
        all: true,
      }, ],
      raw: true,
      nest: true,
    });

    return res.status(200).render('user/tickets', {
      tickets,
    });
  },
};
