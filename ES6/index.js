class JuejinFrontendEngineerSpecification implements Specification {
    isSatisfiedBy(person) {
        return person.isInteresting() && person.canWriteBUG();
    }
}

class JuejinFrontendEngineer extends FrontendEngineer {
    constructor(person) {
        super(person);
        this.thingList = [
            'ES6+',
            'Node.js v8+',
            'Vue.js v2+',
            'SSR',
            'Chrome (Extension|Headless)',
            'Weixin',
            'Docker',
            'rm -rf /',
            'escape'
        ];
    }

    doSomeInterestingThings() {
        this.thingList.forEach(this.tryToPlay.bind(this));
    }
}

const juejinFrontendEngineerSpecification = new JuejinFrontendEngineerSpecification();

if (JuejinFrontendEngineerSpecification.isSatisfiedBy(you)) {
    new JuejinFrontendEngineer(you).doSomeInterestingThings();
}