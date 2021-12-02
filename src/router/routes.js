const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '/',
                component: () =>

                    import ('src/pages/Home.vue')
            },
            {
                path: 'Home',
                component: () =>

                    import ('src/pages/Home.vue')
            },
            {
                path: 'Index',
                component: () =>
                    import ('src/pages/Index.vue')
            },
            {
                path: 'Factura',
                component: () =>
                    import ('src/pages/Factura.vue')
            },
            {
                path: 'Login',
                component: () =>
                    import ('pages/Login.vue')
            },
            {
                path: 'Register',
                component: () =>
                    import ('pages/Register.vue')
            },
            {
                path: 'Cancha',
                component: () =>
                    import ('pages/Cancha.vue')
            },
            {
                path: 'Users',
                component: () =>
                    import ('pages/Users.vue')
            },
            {
                path: 'Disponible',
                component: () =>
                    import ('pages/Disponible.vue')
            },
            {
                path: 'Reservaciones',
                component: () =>
                    import ('pages/Reservaciones.vue')
            },
            {
                path: 'Horarios',
                component: () =>
                    import ('pages/Horarios.vue')
            },

        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes