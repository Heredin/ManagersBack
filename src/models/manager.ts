import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Manager = db.define('Manager', {
    name: {
        type: DataTypes.STRING
    },
    company: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    whatsapp: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Manager;