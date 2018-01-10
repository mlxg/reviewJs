class Input extends Component {

    handleOnChange(e) {
        this.props.setNum(e.target.value);
    }

    render() {
        return (
            <div>
                <input type='number' onChange={this.handleOnChange.bind(this)}/>
            </div>
        );
    }
}

class PercentageShower extends Component {

    static defaultProps = {
        num: 0
    };

    render() {
        const out = this.props.num;
        return (
            <div>{out > 0 && out < 1 ? (out * 100).toFixed(2) : out}%</div>
        );
    }
}

class PercentageApp extends Component {

    constructor() {
        super();
        this.state = {
            value: 0
        };
    }

    handleInput(val) {
        this.setState({
            value: val
        });
    }

    render() {
        return (
            <div>
                <Input setNum={this.handleInput.bind(this)}/>
                <PercentageShower num={this.state.value}/>
            </div>
        );
    }
}
