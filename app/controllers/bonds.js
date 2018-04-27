import Controller from "@ember/controller";
import PapaParse from "papaparse";

export default Controller.extend({
  csvData: null,

  csvFileUploaded(csvFile) {
    const self = this;

    console.table(this.get('csvData'));

    PapaParse.parse(csvFile, {
      quoteChar: '"',
      dynamicTyping: true,
      skipEmptyLines: true,
      trimHeader: true,

      complete(result) {
        self.set('csvData', result.data);
      }
    });
  }
});
