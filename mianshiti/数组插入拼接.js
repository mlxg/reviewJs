/**
 * 数组插入拼接
 * @param item
 * @param sections
 */

const injectSections = (item, sections) => {
    for (let k of sections) {
        // item[k.index] = [k.content, item[k.index]];
        item[k.index] = [k.content].concat(item[k.index]);
    }
    // return [].concat(...item);
    console.log([].concat(...item));
};

injectSections(
    ['item1', 'item2', 'item3', 'item4', 'item5'],
    [
        {content: 'section1', index: 0},
        {content: 'section2', index: 2}
    ]
);