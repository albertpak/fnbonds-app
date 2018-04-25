import TextField from "@ember/component/text-field";

export default TextField.extend({
  type: "file",
  attributeBindings: ["name"],
  csvFileData: null,

  change(e) {
    const input = e.target;

    if (input.files && input.files[0]) {
      this.attrs.csvFileUploaded(input.files[0]);
    }

    return false;
  }
});
