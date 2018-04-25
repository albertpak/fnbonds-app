import TextField from "@ember/component/text-field";
import PapaParse from "papaparse";

export default TextField.extend({
  type: "file",
  attributeBindings: ["name"],
  csvFileData: null,

  sendParsedData(csvFileData) {
    console.log("sendParsedData::this", this);

    this.attrs.csvFilexUploaded(csvFileData);
  },

  parseData(file, callback) {
    console.log("parseData::this", this);

    PapaParse.parse(file, {
      download: true,
      dynamicTyping: true,
      header: true,
      skipEmptyLines: true,
      trimHeader: true,

      complete: function(results) {
        callback(results.data);
      }
    });
  },

  change(e) {
    const input = e.target;

    if (input.files && input.files[0]) {
      console.log("change::this", this);
      this.parseData(input.files[0], this.sendParsedData);
    }

    return false;
  }
});
