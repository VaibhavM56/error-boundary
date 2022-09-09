import React, { Component } from "react";
import FalbackUI from "../FalbackUI";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError is executed");
    console.log(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch is executed");
    console.log("error");
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <FalbackUI />
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
