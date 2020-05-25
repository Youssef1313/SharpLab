import SelectTarget from '../../components/app-select-target';
import { cases, renderComponent, PickPropTypes, loadComponentTemplate } from './helpers';

beforeEach(() => loadComponentTemplate('app-select-target'));

test.each(cases)('C#%s', async (_, bodyClass) => {
    const select = createSelect({ value: 'C#' });

    const rendered = await renderComponent(select, { bodyClass });

    expect(rendered).toMatchImageSnapshot();
});

function createSelect({ value }: PickPropTypes<typeof SelectTarget, 'value'>) {
    return new SelectTarget({
        el: document.createElement('div'),
        propsData: { value }
    });
}