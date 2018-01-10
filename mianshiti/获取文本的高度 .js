Post = props => {
    return (
        <p ref={p => this.p = p} onClick={() => console.log(this.p.clientHeight)}>{props.content}</p>
    );

};