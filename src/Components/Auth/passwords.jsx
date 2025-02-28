export const userCredentials = {
    admin: {
        email: 'admin@cnd.com',
        password: 'admin123',
        role: 'admin',
        permissions: ['all']
    },
    patient: {
        email: 'patient@cnd.com',
<<<<<<< HEAD
        password: 'p123',
=======
        password: 'patient123',
>>>>>>> 9391ef03e70067cb9f5e63bd85e566c203c45142
        role: 'patient',
        permissions: ['view_records', 'book_appointments']
    },
    physician: {
        email: 'physician@cnd.com',
<<<<<<< HEAD
        password: 'p123',
        role: 'physician',
=======
        password: 'physician123',
        role: 'doctor',
>>>>>>> 9391ef03e70067cb9f5e63bd85e566c203c45142
        permissions: ['view_patients', 'manage_appointments']
    },
    receptionist: {
        email: 'receptionist@cnd.com',
<<<<<<< HEAD
        password: 'r123',
=======
        password: 'reception123',
>>>>>>> 9391ef03e70067cb9f5e63bd85e566c203c45142
        role: 'receptionist',
        permissions: ['manage_appointments', 'view_schedule']
    }
};

export const validateCredentials = (username, password) => {
    console.log('Attempting login with:', { username, password });

    const user = Object.values(userCredentials).find(
        (user) => user.email === username && user.password === password
    );

    console.log('Login result:', user ? 'Success' : 'Failed');

    return user || null;
};

export const getUserPermissions = async (userId) => {
    // Mock permissions based on user ID
    const permissions = {
        '1': ['all_access', 'manage_users', 'manage_settings'],
        '2': ['view_appointments', 'book_appointments', 'view_profile'],
        '3': ['manage_appointments', 'view_patients', 'schedule_appointments']
    };

    return permissions[userId] || [];
}; 