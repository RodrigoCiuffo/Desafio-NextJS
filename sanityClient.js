import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '1h0aqla8',
    dataset: 'production',
    useCdn: true,
});

export default client;