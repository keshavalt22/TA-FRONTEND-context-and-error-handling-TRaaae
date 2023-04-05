import React from "react";

export default class ErrorBoundary2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Click to Throw an Error</h1>;
        }

        return this.props.children;
    }
}
