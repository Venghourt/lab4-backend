import {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} from '/c:/Users/USER/Downloads/StartCode/StartCode/EX-1/Models/userModel.js';

export const listUsers = (req, res) => {
    res.json(getUsers());
};

export const getUser = (req, res) => {
    const user = getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newId = Math.max(...getUsers().map(u => u.id)) + 1;
    const newUser = { id: newId, name, email };
    addUser(newUser);
    res.status(201).json(newUser);
};

export const updateUserDetails = (req, res) => {
    const userId = parseInt(req.params.id);
    const updated = updateUser(userId, req.body);
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
};

export const removeUser = (req, res) => {
    const success = deleteUser(parseInt(req.params.id));
    if (!success) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
};
