import formidable from "formidable";

const form = formidable({ multiples: true });

export default async function multipartForm(req, res, next) {
  const contentType = req.headers["content-type"];

  if (contentType && contentType.includes("multipart/form-data")) {
    form.parse(req, (err, fields, files) => {
      if (!err) {
        req.body = fields;
        req.files = files;
      }

      next();
    });
  } else {
    next();
  }
}
