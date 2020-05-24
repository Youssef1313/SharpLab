import dateFormat from 'dateformat';
import type { Branch } from '../types/branch';

function getBranchDisplayName(branch: Branch) {
    const feature = branch.feature;
    let displayName = feature
        ? `${feature.language}: ${feature.name}`
        : branch.name;
    if (branch.commits)
        displayName += ` (${dateFormat(branch.commits[0].date, 'd mmm yyyy')})`;

    return displayName;
}

export {
    getBranchDisplayName
};