class Computer extends Component {
    constructor() {
        super();
        this.state = {status: 'off'};
    }

    open() {
        this.setState({
            status: this.state.status === 'off' ? 'on' : 'off'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.open.bind(this)}>开关</button>
                <Screen showContent={this.state.status === 'off' ? '关了' : '亮了'}/>
            </div>
        );
    }
}

class Screen extends Component {
    static defaultProps = {showContent: '无内容'};

    render() {
        const showContent = this.props.showContent;
        return (
            <div className='screen'>{showContent}</div>
        );
    }
}