export const required = value => {
    if (value) return undefined;

    return "Пустое поле";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимум ${maxLength} символов`;
    return undefined;
}