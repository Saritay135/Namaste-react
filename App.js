    import React from "react";
    import ReactDOM from "react-dom/client";

    // const heading = React.createElement(
    //     "h1",
    //     {
    //         id: "title",
    //         key : "h1",
    //     },
    //     "Heading 1");

    // const heading2 = React.createElement(
    //     "h2",
    //     {
    //         id: "title",
    //         key : "h2",
    //     },
    //     "Heading 2");

    // const container =React.createElement(
    //     "div",
    //     {
    //         id: "container",
    //     },
    //      [heading, heading2]);

    const heading = (
      <h1 id="title" key="h2">
        Namaste React
      </h1>
    );

    const HeaderComponent = () => {
        return (
           <div>
             {heading}
            <h1>Namaste React </h1>
            <h2>this is a h2 tag</h2>
           </div>
        );

    };

    const root = ReactDOM.createRoot(document.getElementById("root"))
    
    root.render(<HeaderComponent/>);

