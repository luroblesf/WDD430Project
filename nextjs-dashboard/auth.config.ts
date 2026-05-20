import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },

    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            // ❌ si no está logueado y quiere dashboard
            if (isOnDashboard) {
                return isLoggedIn;
            }

            // ❌ NUNCA redirect aquí
            return true;
        },
    },

    providers: [],
} satisfies NextAuthConfig;
