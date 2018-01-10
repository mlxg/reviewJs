const lessons = [
    {title: 'Lesson 1: title', description: 'Lesson 1: description'},
    {title: 'Lesson 2: title', description: 'Lesson 2: description'},
    {title: 'Lesson 3: title', description: 'Lesson 3: description'},
    {title: 'Lesson 4: title', description: 'Lesson 4: description'}
];

class Lesson extends Component {
    /* TODO */

    render() {
        const {lessions} = this.props;
        return (
            <div onClick={() => console.log(`${this.props.index}-${this.props.title}`)}>
                <h2>{lession.title}</h2>
                <p>{lession.description}</p>
            </div>
        );
    }
}

class LessonsList extends Component {
    /* TODO */

    render() {
        return (
            <div>{this.props.lessions.map((lessons, i) => <Lesson key={i} index={i} lession={lessons}/>)}</div>
        );
    }
}