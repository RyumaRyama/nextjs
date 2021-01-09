import * as React from 'react'
import styles from '../styles/Home.module.css'

export default class Rikai extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rikais: [],
            cnt: 0
        };
        
        this.add_rikai = () => {
            this.setState({
                rikais: [
                    ...this.state.rikais,
                    <RikaiText key={this.state.cnt}/>
                ],
                cnt: this.state.cnt+1
            });
        };
    }

    render() {
        return (
            <div>
                <button className={styles.rikai_button} onClick={this.add_rikai}>
                    理解
                </button>
                {this.state.rikais}
            </div>
        );
    }
}

function RikaiText(key) {
    return (
        <div className={styles.rikai} key={key}>
        Next.js完全に理解した！
        </div>
    )
}