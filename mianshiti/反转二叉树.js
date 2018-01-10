const getNum = (p, c, i) => {
    const ti = (i + 1).toString(2).length;
    p[ti] = p[ti] || [];
    p[ti].push(c);
    console.log(ti);
    return p;

};

const invertTree = tree => {
    tree.reduce(getNum, [])
        .map(x => x.reverse())
        .reduce((p, c) => [...p, ...c], []);
};

const _tree = [4, 3, 2, 7, 1, 2, 3, 6, 5, 9, null, null, null, null, null];
invertTree(_tree);
