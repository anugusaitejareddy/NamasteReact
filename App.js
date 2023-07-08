// const heading = React.createElement("h1", {id:"heading"}, "Hello world from Reaaaaaaaaaaact");
// console.log(heading);


{/* 

<div id = "parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
    </div>
</div>

*/}

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h1", {}, "I am an H1 tag"),
        ]
    ),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an H1 Tag"),
        React.createElement("h1", {}, "I am an H1 Tag"),
        ]
    )
]
)

// We are using ReactDOM as it is used for rendering the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
