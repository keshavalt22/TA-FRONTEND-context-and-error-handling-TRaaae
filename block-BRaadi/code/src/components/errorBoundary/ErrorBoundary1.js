import React from "react";

export default class ErrorBoundary1 extends React.Component {
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
            return <h1>"Something went wrong! Reload the page"</h1>;
        }

        return this.props.children;
    }
}
