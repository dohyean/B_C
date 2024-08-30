class Category {
  constructor(id, status, left, top, content, readonly, subcategories = []) {
    this.id = id;
    this.status = status;
    this.left = left;
    this.top = top;
    this.content = content;
    this.readonly = readonly;
    this.subcategories = subcategories;
  }

  addSubcategory(subcategory) {
    if (subcategory instanceof Category) {
      this.subcategories.push(subcategory);
    } else {
      console.error("Subcategory is not a Category");
    }
  }

  removeSubcategory(name) {
    this.subcategories = this.subcategories.filter((sub) => sub.name !== name);
  }

  changeCategoryContent(content) {
    this.content = content;
  }

  changeReadonly() {
    this.readonly = !this.readonly;
  }
}

export default Category;
