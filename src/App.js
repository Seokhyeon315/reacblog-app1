import "./App.css";
import { useState } from "react";

function App() {
  let blogName = "ReactBlog";
  let [postTitle, changeTitle] = useState(["Post1", "ost2", "AI=3"]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, inputChange] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogName}</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.sort();
          changeTitle(copy);
        }}>
        Sort list
      </button>

      {postTitle.map(function (title, i) {
        return (
          <div className="list" key={i}>
            <h5
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}>
              {title}
              <div>
                {count[i]}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy1 = [...count];
                    copy1[i] += 1;
                    setCount(copy1);
                  }}>
                  Like
                </button>
              </div>
            </h5>

            <p>Oct 23rd posted</p>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                changeTitle(copy);
              }}>
              Delete
            </button>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          //입력값을 inputValue state 에 저장

          inputChange(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          //inputValue state 에 저장된값을 postTitle state에 추가

          let newList = [...postTitle];
          newList.unshift(inputValue);
          changeTitle(newList);
          let copy = [...count];
          setCount(copy.add(0));
        }}>
        Add
      </button>

      {modal === true ? (
        <Modal
          color={"skyblue"}
          postTitle={postTitle}
          changeTitle={changeTitle}
          title={title}
          setTitle={setTitle}
        />
      ) : null}
    </div>
  );
}

// Modal component
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.postTitle[props.title]}</h4>
      <p>Date</p>
      <p>Detail</p>
      <button
        onClick={() => {
          let copy2 = [...props.postTitle];
          copy2[0] = "Programming";
          props.changeTitle(copy2);
        }}>
        Edit post
      </button>
    </div>
  );
}

export default App;
