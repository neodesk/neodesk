import User from '../models/User';
import Operator from '../models/Operator'
import Job from '../models/Job'
import Organization from '../models/Organization'
import Address from '../models/Address'

export default {
  index: async (req, res) => {
    let users = await User.findAll({
      include: [{
        model: Job,
        as: 'user_job',
        require: true
      }, {
        model: Organization,
        as: 'user_organization',
        required: true
      }]
    });
    let operators = await Operator.findAll({
      include: [{
        model: Job,
        as: 'operator_job',
        require: true
      }, {
        model: Organization,
        as: 'operator_organization',
        required: true
      }]
    });
    res.render('operator/users', {
      users: users,
      operators: operators
    });
  },
  show: async (req, res) => {
    let {
      id
    } = req.params;
    let user = await User.findOne({
      where: {
        id: id
      },
      include: [{
        model: Address,
        as: 'user_address',
        require: true,
      }, {
        model: Organization,
        as: 'user_organization',
        require: true,
      }, {
        model: Job,
        as: 'user_job',
        require: true,
      }]
    });
    res.render('operator/edit_user', {user});
  },
  create: (req,res) => {
    res.render('operator/create_user')
  }
}
