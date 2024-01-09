export const cardSchema = {
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
    ]
};

export default cardSchema;