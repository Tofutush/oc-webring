import sites from './sites.json' with {type: 'json'};

export default [...new Set(sites.flatMap(site => site.tags ?? []))].sort((a, b) => a.localeCompare(b));
