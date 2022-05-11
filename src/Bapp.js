import React from "react";
import "./App.css";
let arr = [];
let lines = [];

let temp = [["0", "1", "2", "5"], [], [], [], [], [], []];

export default function Bapp({ LeaderLine }) {
  const [startValue, setStartValue] = React.useState({});
  const [endValue, setEndValue] = React.useState({});
  const startRef = React.useRef(null);
  const endRef = React.useRef(null);
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

  const addConnections = (start, end, i, j, boolValue) => {
    if (start && end) {
      console.log(startRef.current.children[i], endRef.current.children[j]);
      // rhis is not working too
      let line = new LeaderLine(
        startRef.current.children[i],
        endRef.current.children[j],
        { hide: boolValue }
      );
      // rhis is not working too

      lines[i][j] = line;
      setEndValue(null);
    }
  };

  React.useEffect(() => {
    for (let i in starts) {
      lines[i] = [];
      arr[i] = [];
      for (let j in ends) {
        addConnections(
          starts[i].start,
          ends[j].end,
          i,
          j,
          temp[i].includes(j) ? false : true
        );
      }
    }

    return () => {
      for (let i in lines) {
        for (let j in lines[i]) {
          lines[i][j].hide();
        }
      }
    };
  }, []);

  /**
   * this useEffect is for single dimensional
   * MMQ type questions
   */
  React.useEffect(() => {
    /**
     * check of endValue and startValue is empty or null
     */
    if (
      endValue !== null &&
      startValue !== null &&
      Object.keys(endValue).length > 0 &&
      Object.keys(startValue).length > 0
    ) {
      /**
       * hide every line visible
       */
      for (let i in lines[startValue.index]) {
        lines[startValue.index][i].hide();
      }
      /**
       * check if current endValue's index is
       * there inside arra elements
       */
      if (arr[startValue.index] === endValue.index) {
        /**
         * remove current index element from arr
         */
        arr[startValue.index] = [];
        /**
         * hide current selected startValue index line to
         * current selected endValue index line
         */
        lines[startValue.index][endValue.index].hide();
      } else {
        /**
         * assign arr of current selected startValue index with
         * selected endValue index
         */
        arr[startValue.index] = endValue.index;
        /**
         * show connected line from selected startValue index
         * to currently selected endValue index
         */
        console.log(lines);
        lines[startValue.index][endValue.index].show();
      }
      /**
       * remove empty selected startValues and endValues
       */
      setEndValue({});
      setStartValue({});
    }
  });

  // /**
  //  * this useEffect is for multi dimensional
  //  * MMQ type questions
  //  */
  // React.useEffect(() => {
  //   /**
  //    * check of endValue and startValue is empty or null
  //    */
  //   if (
  //     endValue !== null &&
  //     startValue !== null &&
  //     Object.keys(endValue).length > 0 &&
  //     Object.keys(startValue).length > 0
  //   ) {
  //     /**
  //      * check if current endValue's index is
  //      * there inside arra elements
  //      */
  //     if (arr[startValue.index] === endValue.index) {
  //       /**
  //        * remove current index element from arr
  //        */
  //       arr[startValue.index] = [];
  //       /**
  //        * hide current selected startValue index line to
  //        * current selected endValue index line
  //        */
  //       lines[startValue.index][endValue.index].hide();
  //     } else {
  //       /**
  //        * assign arr of current selected startValue index with
  //        * selected endValue index
  //        */
  //       arr[startValue.index].push(endValue.index);
  //       /**
  //        * show connected line from selected startValue index
  //        * to currently selected endValue index
  //        */
  //       lines[startValue.index][endValue.index].show();
  //     }
  //     /**
  //      * remove empty selected startValues and endValues
  //      */
  //     setEndValue({});
  //     setStartValue({});
  //   }
  // });

  /**
   *
   * @param {*id of the start element to be sent} value
   * @param {*index of the start element to be sent} index
   */
  const setStart = (value, index) => {
    /**
     * assign an object to startValue
     */
    setStartValue({ id: value, index: index });
  };

  /**
   * @param {*id of the end element to be sent} value
   * @param {*index of the end element to be sent} index
   */
  const setEnd = (value, index) => {
    /**
     * assign an object to endValue
     */
    setEndValue({ id: value, index: index });
  };

  return (
    <div>
      <header className='App-header'>
        <div className='projects'>
          <div className='starts' ref={startRef}>
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
          <div className='ends' ref={endRef}>
            {ends.map((item, index) => {
              return (
                <button
                  disabled={Object.keys(startValue).length > 0 ? false : true}
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
    </div>
  );
}
