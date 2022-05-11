import "./App.css";
import LeaderLine from "leader-line-new";
import React from "react";
import NewWin from "./NewWin";
import Bapp from "./Bapp";

let arr = [];

function App() {
  const [startValue, setStartValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);
  const [diff, setDiff] = React.useState(true);
  const [starts] = React.useState([
    {
      start: "start0",
    },
    {
      start: "start1",
    },
    {
      start: "start2",
    },
    {
      start: "start3",
    },
    {
      start: "start4",
    },
    {
      start: "start5",
    },
    {
      start: "start6",
    },
  ]);

  const [ends] = React.useState([
    {
      end: "end0",
    },
    {
      end: "end1",
    },
    {
      end: "end2",
    },
    {
      end: "end3",
    },
    {
      end: "end4",
    },
    {
      end: "end5",
    },
    {
      end: "end6",
    },
  ]);

  const addConnections = (start, end) => {
    if (startValue && endValue) {
      var line;
      if (
        arr[start.index] !== undefined &&
        arr[start.index] !== null &&
        arr[start.index].length > 0
      ) {
        line = new LeaderLine(
          document.getElementById(start.id),
          document.getElementById(ends[start.index].end)
        );
        line.hide();
        console.log(line);
      }
      if (line !== undefined) {
        console.log(line);
        line.remove();
      }
      new LeaderLine(
        document.getElementById(start.id),
        document.getElementById(end.id)
      );
      arr[start.index] = [end.index];
      // setStartValue(null);
      setEndValue(null);
    }
    console.log(arr);
  };

  React.useEffect(() => {
    addConnections(startValue, endValue);
  }, [startValue, endValue]);

  const setStart = (value, index) => {
    setStartValue({ id: value, index: index });
  };

  const setEnd = (value, index) => {
    setEndValue({ id: value, index: index });
  };

  return (
    <div className='App'>
      <div>
        <button onClick={() => setDiff(!diff)}>Go to diff</button>
      </div>
      {diff ? (
        <header className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p className='App-link' target='_blank' rel='noopener noreferrer'>
            Learn React
          </p>
          <div className='projects'>
            <div className='starts'>
              {starts.map((item, index) => {
                return (
                  <button
                    key={item.start}
                    id={item.start}
                    onClick={() => setStart(item.start, index)}>
                    start
                  </button>
                );
              })}
            </div>
            <div className='ends'>
              {ends.map((item, index) => {
                return (
                  <button
                    disabled={startValue === null ? true : false}
                    id={item.end}
                    key={item.end}
                    onClick={() => setEnd(item.end, index)}>
                    end
                  </button>
                );
              })}
            </div>
          </div>
        </header>
      ) : (
        <div>
          <NewWin LeaderLine={LeaderLine} />
          {/* <Bapp LeaderLine={LeaderLine} /> */}
        </div>
      )}
    </div>
  );
}

export default App;
