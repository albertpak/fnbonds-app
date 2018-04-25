import Controller from "@ember/controller";
import PapaParse from "papaparse";

export default Controller.extend({
  csvData: null,

  setParsedData(result) {
    this.csvData = result.data;
  },

  csvFileUploaded(csvFile) {
    PapaParse.parse(csvFile, {
      download: true,
      dynamicTyping: true,
      header: true,
      skipEmptyLines: true,
      trimHeader: true,
      complete: this.setParsedData
    });
  }
});
