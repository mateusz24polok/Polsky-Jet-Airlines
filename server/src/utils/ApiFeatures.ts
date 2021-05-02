import { Document, Query } from "mongoose";

export class ApiFeatures {
  query: Query<Document<any, {}>[], Document<any, {}>, {}>;
  queryString: Record<string, unknown>;
  constructor(
    query: Query<Document<any, {}>[], Document<any, {}>, {}>,
    queryString: Record<string, unknown>
  ) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "fields", "limit"];
    excludedFields.forEach((field) => delete queryObj[field]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
}
