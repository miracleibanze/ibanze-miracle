import React, { Component } from "react";
import PageNotFound from "./components/PageNotFound.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="">{error.toString()}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
