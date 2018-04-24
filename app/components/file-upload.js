import TextField from "@ember/component/text-field";

export default TextField.extend({
  type: "file",
  attributeBindings: ["name"],
  csvData: null,
  csvFile: null,

  change(evt) {
    const input = evt.target;

    if (input.files && input.files[0]) {
      this.attrs.csvFileUploaded(input.files[0]);
    }

    return false;
  }
});
