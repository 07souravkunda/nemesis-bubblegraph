import './App.css';
import BubbleChart from "./component/bubbleChart";
import React, { Component } from 'react'
import XLSX from "xlsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      dataSet: [],
      showGraph: false
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handle2015 = this.handle2015.bind(this);
    this.handle2016 = this.handle2016.bind(this);
    this.handle2017 = this.handle2017.bind(this);
    this.handle2018 = this.handle2018.bind(this);
    this.handle2019 = this.handle2019.bind(this);
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  }
  handleFile() {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = e => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true
      });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      this.setState({ data: data });
      this.setState({ showGraph: true });
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    }
  }
  handle2015() {
    var totalRevN = 0, totalExpN = 0;
    var totalRevW = 0, totalExpW = 0;
    var totalRevS = 0, totalExpS = 0;
    var totalRevE = 0, totalExpE = 0;

    this.state.data.forEach(e => {
      if (e['Zone'] == 'North' && e['Year'] == '2015') {
        totalRevN += e['Revenue'];
        totalExpN += e['Expense'];
      }
      if (e['Zone'] == "West" && e['Year'] == '2015') {
        totalRevW += e['Revenue'];
        totalExpW += e['Expense'];
      }
      if (e['Zone'] == "South" && e['Year'] == '2015') {
        totalRevS += e['Revenue'];
        totalExpS += e['Expense'];
      }
      if (e['Zone'] == "East" && e['Year'] == '2015') {
        totalRevE += e['Revenue'];
        totalExpE += e['Expense'];
      }
    });

    var dataSetN = [{
      x: totalRevN,
      y: totalExpN,
      r: 8
    }];
    var dataSetW = [{
      x: totalRevW,
      y: totalExpW,
      r: 8
    }];
    var dataSetS = [{
      x: totalRevS,
      y: totalExpS,
      r: 8
    }];
    var dataSetE = [{
      x: totalRevE,
      y: totalExpE,
      r: 8
    }];
    var dataSet15 = [
      {
        label: "North",
        backgroundColor: "#ff6384",
        data: dataSetN
      },
      {
        label: "West",
        backgroundColor: "#ff6384",
        data: dataSetW
      },
      {
        label: "South",
        backgroundColor: "#ff6384",
        data: dataSetS
      },
      {
        label: "East",
        backgroundColor: "#ff6384",
        data: dataSetE
      }
    ];
    this.setState({
      dataSet: dataSet15
    })
  }
  handle2016() {
    var totalRevN = 0, totalExpN = 0;
    var totalRevW = 0, totalExpW = 0;
    var totalRevS = 0, totalExpS = 0;
    var totalRevE = 0, totalExpE = 0;

    this.state.data.forEach(e => {
      if (e['Zone'] == "North" && e['Year'] == '2016') {
        totalRevN += e['Revenue'];
        totalExpN += e['Expense'];
      }
      if (e['Zone'] == "West" && e['Year'] == '2016') {
        totalRevW += e['Revenue'];
        totalExpW += e['Expense'];
      }
      if (e['Zone'] == "South" && e['Year'] == '2016') {
        totalRevS += e['Revenue'];
        totalExpS += e['Expense'];
      }
      if (e['Zone'] == "East" && e['Year'] == '2016') {
        totalRevE += e['Revenue'];
        totalExpE += e['Expense'];
      }
    });

    var dataSetN = [{
      x: totalRevN,
      y: totalExpN,
      r: 8
    }];
    var dataSetW = [{
      x: totalRevW,
      y: totalExpW,
      r: 8
    }];
    var dataSetS = [{
      x: totalRevS,
      y: totalExpS,
      r: 8
    }];
    var dataSetE = [{
      x: totalRevE,
      y: totalExpE,
      r: 8
    }];
    var dataSet16 = [
      {
        label: "North",
        backgroundColor: "#ff6384",
        data: dataSetN
      },
      {
        label: "West",
        backgroundColor: "#ff6384",
        data: dataSetW
      },
      {
        label: "South",
        backgroundColor: "#ff6384",
        data: dataSetS
      },
      {
        label: "East",
        backgroundColor: "#ff6384",
        data: dataSetE
      }
    ];
    this.setState({
      dataSet: dataSet16
    })
  }
  handle2017() {
    var totalRevN = 0, totalExpN = 0;
    var totalRevW = 0, totalExpW = 0;
    var totalRevS = 0, totalExpS = 0;
    var totalRevE = 0, totalExpE = 0;

    this.state.data.forEach(e => {
      if (e['Zone'] == "North" && e['Year'] == '2017') {
        totalRevN += e['Revenue'];
        totalExpN += e['Expense'];
      }
      if (e['Zone'] == "West" && e['Year'] == '2017') {
        totalRevW += e['Revenue'];
        totalExpW += e['Expense'];
      }
      if (e['Zone'] == "South" && e['Year'] == '2017') {
        totalRevS += e['Revenue'];
        totalExpS += e['Expense'];
      }
      if (e['Zone'] == "East" && e['Year'] == '2017') {
        totalRevE += e['Revenue'];
        totalExpE += e['Expense'];
      }
    });

    var dataSetN = [{
      x: totalRevN,
      y: totalExpN,
      r: 8
    }];
    var dataSetW = [{
      x: totalRevW,
      y: totalExpW,
      r: 8
    }];
    var dataSetS = [{
      x: totalRevS,
      y: totalExpS,
      r: 8
    }];
    var dataSetE = [{
      x: totalRevE,
      y: totalExpE,
      r: 8
    }];
    var dataSet17 = [
      {
        label: "North",
        backgroundColor: "#ff6384",
        data: dataSetN
      },
      {
        label: "West",
        backgroundColor: "#ff6384",
        data: dataSetW
      },
      {
        label: "South",
        backgroundColor: "#ff6384",
        data: dataSetS
      },
      {
        label: "East",
        backgroundColor: "#ff6384",
        data: dataSetE
      }
    ];
    this.setState({
      dataSet: dataSet17
    })
  }
  handle2018() {
    var totalRevN = 0, totalExpN = 0;
    var totalRevW = 0, totalExpW = 0;
    var totalRevS = 0, totalExpS = 0;
    var totalRevE = 0, totalExpE = 0;

    this.state.data.forEach(e => {
      if (e['Zone'] == "North" && e['Year'] == '2018') {
        totalRevN += e['Revenue'];
        totalExpN += e['Expense'];
      }
      if (e['Zone'] == "West" && e['Year'] == '2018') {
        totalRevW += e['Revenue'];
        totalExpW += e['Expense'];
      }
      if (e['Zone'] == "South" && e['Year'] == '2018') {
        totalRevS += e['Revenue'];
        totalExpS += e['Expense'];
      }
      if (e['Zone'] == "East" && e['Year'] == '2018') {
        totalRevE += e['Revenue'];
        totalExpE += e['Expense'];
      }
    });

    var dataSetN = [{
      x: totalRevN,
      y: totalExpN,
      r: 8
    }];
    var dataSetW = [{
      x: totalRevW,
      y: totalExpW,
      r: 8
    }];
    var dataSetS = [{
      x: totalRevS,
      y: totalExpS,
      r: 8
    }];
    var dataSetE = [{
      x: totalRevE,
      y: totalExpE,
      r: 8
    }];
    var dataSet18 = [
      {
        label: "North",
        backgroundColor: "#ff6384",
        data: dataSetN
      },
      {
        label: "West",
        backgroundColor: "#ff6384",
        data: dataSetW
      },
      {
        label: "South",
        backgroundColor: "#ff6384",
        data: dataSetS
      },
      {
        label: "East",
        backgroundColor: "#ff6384",
        data: dataSetE
      }
    ];
    this.setState({
      dataSet: dataSet18
    })
  }
  handle2019() {
    var totalRevN = 0, totalExpN = 0;
    var totalRevW = 0, totalExpW = 0;
    var totalRevS = 0, totalExpS = 0;
    var totalRevE = 0, totalExpE = 0;

    this.state.data.forEach(e => {
      if (e['Zone'] == "North" && e['Year'] == '2019') {
        totalRevN += e['Revenue'];
        totalExpN += e['Expense'];
      }
      if (e['Zone'] == "West" && e['Year'] == '2019') {
        totalRevW += e['Revenue'];
        totalExpW += e['Expense'];
      }
      if (e['Zone'] == "South" && e['Year'] == '2019') {
        totalRevS += e['Revenue'];
        totalExpS += e['Expense'];
      }
      if (e['Zone'] == "East" && e['Year'] == '2019') {
        totalRevE += e['Revenue'];
        totalExpE += e['Expense'];
      }
    });

    var dataSetN = [{
      x: totalRevN,
      y: totalExpN,
      r: 8
    }];
    var dataSetW = [{
      x: totalRevW,
      y: totalExpW,
      r: 8
    }];
    var dataSetS = [{
      x: totalRevS,
      y: totalExpS,
      r: 8
    }];
    var dataSetE = [{
      x: totalRevE,
      y: totalExpE,
      r: 8
    }];
    var dataSet19 = [
      {
        label: "North",
        backgroundColor: "#ff6384",
        data: dataSetN
      },
      {
        label: "West",
        backgroundColor: "#ff6384",
        data: dataSetW
      },
      {
        label: "South",
        backgroundColor: "#ff6384",
        data: dataSetS
      },
      {
        label: "East",
        backgroundColor: "#ff6384",
        data: dataSetE
      }
    ];
    this.setState({
      dataSet: dataSet19
    })
  }

  render() {
    console.log(this.state.dataSet);
    return (
      <div className="App" >
        <label htmlFor="file">Upload an excel to Process Triggers</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept="XLSX"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="submit"
          value="Plot graph"
          onClick={this.handleFile}
        />
        {this.state.showGraph && <div className="buttonList">
          <h4>Choose a year</h4>
          <button onClick={this.handle2015}>2015</button>
          <button onClick={this.handle2016}>2016</button>
          <button onClick={this.handle2017}>2017</button>
          <button onClick={this.handle2018}>2018</button>
          <button onClick={this.handle2019}>2019</button>
        </div>}
        <div class="graph">
          {this.state.showGraph && <BubbleChart data={this.state.dataSet} />}
        </div>
      </div>
    );
  }
}

export default App;