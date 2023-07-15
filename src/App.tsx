import React from 'react';
import './App.css';
import {asyncLoadData} from "./store/dataReducer";
import {useAppSelector} from "./hooks/useRedux";
import {useDispatch} from "react-redux";
import TableComponent from "./component/TableComponent";
import {Button} from "@mui/material";
import Loader from "./component/Loader";

function App() {

  const dispatch = useDispatch();
  const data = useAppSelector(state => state.dataReducer);

  return (
      <div className="App">
        <div className="container">
          <div className="app-inner">
            <Button onClick={() => dispatch(asyncLoadData())} variant="contained">LOAD DATA</Button>
            {!data.error && <TableComponent rows={data.data} />}
            {data.error && data.error }
          </div>
        </div>
        {data.loading && <Loader />}
      </div>

  );
}

export default App;
