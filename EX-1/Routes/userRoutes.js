import express from 'express';
import {
    listUsers,
    getUser,
    createUser,
    updateUserDetails,
    removeUser
} from '/c:/Users/USER/Downloads/StartCode/StartCode/EX-1/Controllers/userController.js';

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUserDetails);
router.delete('/:id', removeUser);

export default router;
