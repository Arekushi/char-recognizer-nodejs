export const onlyNumbers = (str: string): string => {
    return str.replace(/\D/g, '');
};

export const randomId = (): string => {
    return (Math.random() + 1).toString(36).substring(7);
};
