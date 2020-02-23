export default function formatMoney(value, currency = 'USD', locale = 'en-US') {
    const formattedValue = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value);
    return formattedValue;
}
