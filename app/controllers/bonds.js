import Controller from "@ember/controller";
import PapaParse from "papaparse";

export default Controller.extend({
  csvData: null,

  csvFileUploaded(csvFile) {
    const self = this;

    PapaParse.parse(csvFile, {
      download: true,
      dynamicTyping: true,
      header: true,
      skipEmptyLines: true,
      trimHeader: true,

      complete(result) {
        self.set('csvData', result.data);
      }
    });
  }
});
