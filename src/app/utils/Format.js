class Format {
  static removeSpecialsCharacters(text) {
    return text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  }
}

export default Format;
