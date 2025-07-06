// Esto habilita el modo de aumento de módulos.
import 'date-wizard';

declare module 'date-wizard' {
    interface DateDetails {
        year: number;
        month: number;
        date: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
    
    function pad(value: number): string;
}
