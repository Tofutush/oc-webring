import sites from './sites.json' with {type: 'json'};

export default Object.entries(
    sites.reduce((acc, { tags }) => {
        if (!Array.isArray(tags)) return acc;
        tags.forEach(t => acc[t] = (acc[t] || 0) + 1);
        return acc;
    }, {})
)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([t]) => t);
