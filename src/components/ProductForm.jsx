import React, { useState } from 'react';

function validate(fields, file, isEdit = false)
{
  const errors = {};
  if (!fields.name?.trim())
  {
    errors.name = 'Name is required';
  }
  if (!fields.description?.trim())
  {
    errors.description = 'Description is required';
  }
  if (!fields.price || isNaN(fields.price) || Number(fields.price) <= 0)
  {
    errors.price = 'Valid price required';
  }
  if (!fields.slug?.trim())
  {
    errors.slug = 'Slug is required';
  }
  if (!isEdit && !file)
  {
    errors.image = 'Image is required';
  }
  return errors;
}

export default function ProductForm({ initial, onSave, onClose }) {
  const [fields, setFields] = useState({
    name: initial?.name || '',
    description: initial?.description || '',
    price: initial?.price || '',
    slug: initial?.slug || ''
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const isEdit = !!initial;

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    setErrors(errs => ({ ...errs, [name]: '' }));
  };

  const handleFile = e => {
    setFile(e.target.files[0]);
    setErrors(errs => ({ ...errs, image: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate(fields, file, isEdit);
    setErrors(errs);
    if (Object.keys(errs).length > 0)
    {
      return;
    }
    setSubmitting(true);
    await onSave(fields, file, isEdit, initial?._id);
    setSubmitting(false);
  };

  return (
    <div className="modal" onClick={onClose}>
      <form
        className="modal-content contact-form"
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h3>{isEdit ? 'Edit Product' : 'Add Product'}</h3>

        <div className="form-group">
          <label>Name</label>
          <input name="name" value={fields.name} onChange={handleChange} />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={fields.description} onChange={handleChange} />
          {errors.description && <div className="error">{errors.description}</div>}
        </div>

        <div className="form-group">
          <label>Price ($)</label>
          <input name="price" type="number" value={fields.price} onChange={handleChange} />
          {errors.price && <div className="error">{errors.price}</div>}
        </div>

        <div className="form-group">
          <label>Slug</label>
          <input name="slug" value={fields.slug} onChange={handleChange} />
          {errors.slug && <div className="error">{errors.slug}</div>}
        </div>

        <div className="form-group">
          <label>Image {isEdit && <span style={{fontWeight:'normal'}}>(leave blank to keep existing)</span>}</label>
          <input type="file" accept="image/*" onChange={handleFile} />
          {errors.image && <div className="error">{errors.image}</div>}
        </div>

        <div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
          <button type="submit" className="button" disabled={submitting}>
            {submitting ? 'Saving...' : isEdit ? 'Update' : 'Add'}
          </button>
          <button type="button" className="button" onClick={onClose} style={{background:'#eee', color:'#222'}}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
