export function formatarNumero(numero) {
    if (numero >= 1e6) {
      return (numero / 1e6).toFixed(1).replace('.0', '') + 'M';
    }
    if (numero >= 1e3) {
      return (numero / 1e3).toFixed(1).replace('.0', '') + 'k';
    }
    return numero.toString();
}