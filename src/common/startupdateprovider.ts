export const StartupDateProvider = {
    provide: 'STARTUP_DATE',
    useFactory: () => {
        return new Date().toISOString();
    },
}