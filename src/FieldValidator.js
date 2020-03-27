class FieldValidator {

  constructor(props) {
    this.validate = this.validate.bind(this);
  }

  validate(field, fieldData, errors) {

    console.log("validate", field, fieldData, errors);

    if (field.Type === "Fixed") {

      if (field.DataEncoding === 'ASCII' || field.DataEncoding === 'EBCDIC') {
        if (fieldData.length !== field.FixedSize) {
          errors.push(
              `\u2b55 "${field.Name}" should have a fixed size of ${field.FixedSize} but has ${fieldData.length}`);
        }
      } else {
        if (fieldData.length !== 2 * field.FixedSize) {
          errors.push(
              `\u2b55 "${field.Name}" should have a fixed size of ${field.FixedSize} but has ${fieldData.length/2}`);
        }
      }

    }

    if (field.DataEncoding === 'BCD' || field.DataEncoding === 'BINARY') {
      if (fieldData.length % 2 !== 0) {
        errors.push(
            `\u2b55 "${field.Name}" should have even number of characters!`);
      }

      if (field.DataEncoding === 'BINARY' && !fieldData.match(
          "^[0-9,a-f,A-F]+$")) {
        errors.push(`\u2b55 "${field.Name}" supports only hex i.e 0-9,a-z,A-Z`);
      }
      if (field.DataEncoding === 'BCD' && !fieldData.match("^[0-9]+$")) {
        errors.push(`\u2b55 "${field.Name}" supports only bcd i.e 0-9`);
      }

    }

    //TODO:: other checks like content etc

  }

}

let fieldValidator = new FieldValidator();
export default fieldValidator;