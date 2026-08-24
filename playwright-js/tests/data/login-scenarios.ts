export type LoginScenario = {
    name: string;
    username: string;
    password: string;
    success: boolean;
    message?: string;
};

export const loginScenarios: LoginScenario[] = [
    { name: 'locked-out user', username: 'locked_out_user', password: 'secret_sauce', success: false, message: 'Sorry, this user has been locked out.' },
    { name: 'problem user', username: 'problem_user', password: 'secret_sauce', success: true },
    { name: 'performance user', username: 'performance_glitch_user', password: 'secret_sauce', success: true },
    { name: 'invalid credentials', username: 'invalid_user', password: 'wrong_password', success: false, message: 'Username and password do not match' },
];
