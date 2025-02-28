export const userCredentials = {
    admin: {
        email: 'admin@cnd.com',
        password: 'admin123',
        role: 'admin',
        permissions: ['all']
    },
    patient: {
        email: 'patient@cnd.com',
        password: 'patient123',
        role: 'patient',
        permissions: ['view_records', 'book_appointments']
    },
    physician: {
        email: 'physician@cnd.com',
        password: 'physician123',
        role: 'physician',
        permissions: ['view_patients', 'manage_appointments']
    },
    receptionist: {
        email: 'receptionist@cnd.com',
        password: 'reception123',
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
