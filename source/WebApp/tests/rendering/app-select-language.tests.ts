import SelectLanguage from '../../components/app-select-language';
import { cases, renderComponent, PickPropTypes } from './helpers';

test.each(cases)('C#%s', async (_, bodyClass) => {
    const select = createSelect({ value: 'C#' });

    const rendered = await renderComponent(select, { bodyClass });

    expect(rendered).toMatchImageSnapshot();
});

function createSelect({ value }: PickPropTypes<typeof SelectLanguage, 'value'>) {
    return new SelectLanguage({
        el: document.createElement('div'),
        propsData: { value }
    });
}