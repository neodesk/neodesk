import User from '../models/User';
import Operator from '../models/Operator'
import Job from '../models/Job'
import Organization from '../models/Organization'

export default {
  index: async (req, res) => {
    let users = await User.findAll({
      include: [{
        model: Job,
        as: 'user_job',
        require: true
      },{
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
      },{
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
}
