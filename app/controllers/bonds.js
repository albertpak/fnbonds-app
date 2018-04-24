import Controller from "@ember/controller";
import { set } from "@ember/object";
import PapaParse from "papaparse";

export default Controller.extend({
  csvFileData: null,

  csvFileUploaded(uploadedFile) {
    // this.set("uploadedFile", uploadedFile);

    let uploadedCsvData;

    PapaParse.parse(uploadedFile, {
      download: true,
      dynamicTyping: true,
      header: true,
      skipEmptyLines: true,
      trimHeader: true,

      complete(results) {
        console.log("results", results);
        uploadedCsvData = results.data;
      }
    });

    console.log("uploadedCsvData", uploadedCsvData);

    this.set("csvFileData", uploadedCsvData);
  }
});
