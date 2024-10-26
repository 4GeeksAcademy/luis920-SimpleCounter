import React from "react";

function Timer({ digitHours, digitMinuts, digitSeconds }) {
    return (
        <div className="timer">
            <div className="hours"> {String(digitHours).padStart(2, '0')}</div>
            <div className="minuts">:{String(digitMinuts).padStart(2, '0')}</div>
            <div className="seconds">:{String(digitSeconds).padStart(2, '0')}</div>
        </div>
    );
}

class TimerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            intervalId: null,
        };
    }

    startTimer = () => {
        if (!this.state.intervalId) {
            const intervalId = setInterval(() => {
                this.setState(prevState => ({ counter: prevState.counter + 1 }));
            }, 1000);
            this.setState({ intervalId });
        }
    };

    stopTimer = () => {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
    };

    resetTimer = () => {
        this.stopTimer();
        this.setState({ counter: 0 });
    };

    render() {
        const hours = Math.floor(this.state.counter / 3600);
        const minuts = Math.floor((this.state.counter % 3600) / 60);
        const seconds = this.state.counter % 60;

        return (
            <div> 
                <Timer digitHours={hours} digitMinuts={minuts} digitSeconds={seconds} />
              <div className="container-buttons">
                 <button className="btn btn-primary  btn-lg  " onClick={this.startTimer}>Iniciar</button>
                <button className="btn btn-primary  btn-lg  " onClick={this.stopTimer}>Detener</button>
                <button className="btn btn-primary  btn-lg  " onClick={this.resetTimer}>Reiniciar</button>
              </div>
               
            </div>
        );
    }
}

export default TimerApp;
