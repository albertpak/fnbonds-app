import Controller from "@ember/controller";

export default Controller.extend({
  csvFileData: null,

  csvFileUploaded(csvFileData) {
    console.log("outside:csvFileData", csvFileData);

    this.set("csvFileData", csvFileData);
  }
});
