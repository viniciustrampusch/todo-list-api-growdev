"use strict";Object.defineProperty(exports, "__esModule", {value: true});class Format {
  static removeSpecialsCharacters(text) {
    return text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  }
}

exports. default = Format;
