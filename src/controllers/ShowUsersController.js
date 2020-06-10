import User from '../models/User';
import Operator from '../models/Operator'

export default {
  index: async (req, res) => {
    let users = await User.findAll()
    console.log('====================================')
    console.log(users)
    console.log('====================================')
    res.render('operator/users');
  },
}
