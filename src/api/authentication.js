/**
 * Use this file to implement all the Registeration and login functionality
 * Author: Suhaib Affan
 */

import { User } from '../models/user.model';

export default async function register ( req, res ) {

    const { email, password, confirmPassword, firstName, lastName, manager, reportsTo } = req.body;

    const user = new User({ email, password, firstName, lastName, manager, reportsTo });

    user.save();

}