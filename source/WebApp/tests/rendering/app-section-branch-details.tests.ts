import BranchDetailsSection from '../../components/app-section-branch-details';
import { branch } from './data/branch';
import { cases, loadComponentTemplate, renderComponent, PickPropTypes } from './helpers';

beforeEach(() => loadComponentTemplate('app-section-branch-details'));

test.each(cases)('empty%s', async (_, bodyClass) => {
    const section = createSection({ branch: null });

    const rendered = await renderComponent(section, { bodyClass });

    expect(rendered).toMatchImageSnapshot();
});

test.each(cases)('top-section, collapsed%s', async (_, bodyClass) => {
    const section = createSection({ branch });
    section.$el.classList.add('top-section', 'collapsed');

    const rendered = await renderComponent(section, { bodyClass });

    expect(rendered).toMatchImageSnapshot();
});

test.each(cases)('top-section, expanded%s', async (_, bodyClass) => {
    const section = createSection({ branch });
    section.$el.classList.add('top-section');

    const rendered = await renderComponent(section, { bodyClass });

    expect(rendered).toMatchImageSnapshot();
});

test.each(cases)('expanded, no header%s', async (_, bodyClass) => {
    const section = createSection({ branch, header: false });
    section.$el.classList.remove('collapsed');

    const rendered = await renderComponent(section, { bodyClass });

    expect(rendered).toMatchImageSnapshot();
});

function createSection({ branch, header = true }: PickPropTypes<typeof BranchDetailsSection, 'branch'> & { header?: boolean }) {
    return new BranchDetailsSection({
        el: document.createElement('div'),
        propsData: { branch, header }
    });
}