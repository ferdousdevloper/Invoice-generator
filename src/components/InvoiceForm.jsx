import React, { useState } from 'react';

const InvoiceForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    sellerName: '',
    sellerAddress: '',
    sellerCity: '',
    sellerState: '',
    sellerPincode: '',
    sellerPAN: '',
    sellerGST: '',
    placeOfSupply: '',
    billingName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingPincode: '',
    billingUTCode: '',
    shippingName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingPincode: '',
    shippingUTCode: '',
    placeOfDelivery: '',
    orderNo: '',
    orderDate: '',
    invoiceNo: '',
    invoiceDetails: '',
    invoiceDate: '',
    reverseCharge: false,
    signature: "",
    items: [
      {
        description: '',
        unitPrice: '',
        quantity: '',
        discount: '',
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        {
          description: '',
          unitPrice: '',
          quantity: '',
          discount: '',
        },
      ],
    });
  };

  const removeItem = (index) => {
    const updatedItems = [...formData.items];
    updatedItems.splice(index, 1);
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        signature: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here if needed
    onFormSubmit(formData);
  };

  

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-bold mb-4">Invoice Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Seller Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="sellerName" className="block text-sm font-medium text-gray-700">Seller Name</label>
            <input type="text" id="sellerName" name="sellerName" value={formData.sellerName} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="sellerAddress" className="block text-sm font-medium text-gray-700">Seller Address</label>
            <input type="text" id="sellerAddress" name="sellerAddress" value={formData.sellerAddress} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="sellerCity" className="block text-sm font-medium text-gray-700">Seller City</label>
            <input type="text" id="sellerCity" name="sellerCity" value={formData.sellerCity} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="sellerState" className="block text-sm font-medium text-gray-700">Seller State</label>
            <input type="text" id="sellerState" name="sellerState" value={formData.sellerState} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="sellerPincode" className="block text-sm font-medium text-gray-700">Seller Pincode</label>
            <input type="text" id="sellerPincode" name="sellerPincode" value={formData.sellerPincode} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="sellerPAN" className="block text-sm font-medium text-gray-700">Seller PAN</label>
            <input type="text" id="sellerPAN" name="sellerPAN" value={formData.sellerPAN} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="sellerGST" className="block text-sm font-medium text-gray-700">Seller GST</label>
            <input type="text" id="sellerGST" name="sellerGST" value={formData.sellerGST} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="placeOfSupply" className="block text-sm font-medium text-gray-700">Place of Supply</label>
            <input type="text" id="placeOfSupply" name="placeOfSupply" value={formData.placeOfSupply} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        {/* Billing Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="billingName" className="block text-sm font-medium text-gray-700">Billing Name</label>
            <input type="text" id="billingName" name="billingName" value={formData.billingName} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">Billing Address</label>
            <input type="text" id="billingAddress" name="billingAddress" value={formData.billingAddress} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="billingCity" className="block text-sm font-medium text-gray-700">Billing City</label>
            <input type="text" id="billingCity" name="billingCity" value={formData.billingCity} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="billingState" className="block text-sm font-medium text-gray-700">Billing State</label>
            <input type="text" id="billingState" name="billingState" value={formData.billingState} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="billingPincode" className="block text-sm font-medium text-gray-700">Billing Pincode</label>
            <input type="text" id="billingPincode" name="billingPincode" value={formData.billingPincode} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="billingUTCode" className="block text-sm font-medium text-gray-700">Billing UT Code</label>
            <input type="text" id="billingUTCode" name="billingUTCode" value={formData.billingUTCode} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        {/* Shipping Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="shippingName" className="block text-sm font-medium text-gray-700">Shipping Name</label>
            <input type="text" id="shippingName" name="shippingName" value={formData.shippingName} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-700">Shipping Address</label>
            <input type="text" id="shippingAddress" name="shippingAddress" value={formData.shippingAddress} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="shippingCity" className="block text-sm font-medium text-gray-700">Shipping City</label>
            <input type="text" id="shippingCity" name="shippingCity" value={formData.shippingCity} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="shippingState" className="block text-sm font-medium text-gray-700">Shipping State</label>
            <input type="text" id="shippingState" name="shippingState" value={formData.shippingState} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="shippingPincode" className="block text-sm font-medium text-gray-700">Shipping Pincode</label>
            <input type="text" id="shippingPincode" name="shippingPincode" value={formData.shippingPincode} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="shippingUTCode" className="block text-sm font-medium text-gray-700">Shipping UT Code</label>
            <input type="text" id="shippingUTCode" name="shippingUTCode" value={formData.shippingUTCode} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        {/* Other Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="placeOfDelivery" className="block text-sm font-medium text-gray-700">Place of Delivery</label>
            <input type="text" id="placeOfDelivery" name="placeOfDelivery" value={formData.placeOfDelivery} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="orderNo" className="block text-sm font-medium text-gray-700">Order No</label>
            <input type="text" id="orderNo" name="orderNo" value={formData.orderNo} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700">Order Date</label>
            <input type="date" id="orderDate" name="orderDate" value={formData.orderDate.split('/').reverse().join('-')} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="invoiceNo" className="block text-sm font-medium text-gray-700">Invoice No</label>
            <input type="text" id="invoiceNo" name="invoiceNo" value={formData.invoiceNo} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="invoiceDetails" className="block text-sm font-medium text-gray-700">Invoice Details</label>
            <input type="text" id="invoiceDetails" name="invoiceDetails" value={formData.invoiceDetails} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="invoiceDate" className="block text-sm font-medium text-gray-700">Invoice Date</label>
            <input type="date" id="invoiceDate" name="invoiceDate" value={formData.invoiceDate} onChange={handleDateChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex items-center">
            <label htmlFor="reverseCharge" className="block text-sm font-medium text-gray-700">Reverse Charge</label>
            <input type="checkbox" id="reverseCharge" name="reverseCharge" checked={formData.reverseCharge} onChange={(e) => setFormData({ ...formData, reverseCharge: e.target.checked })} className="ml-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
          </div>
          <div>
          <label htmlFor="signature" className="block text-sm font-medium text-gray-700">Signature</label>
          <input type="file" id="signature" name="signature" accept="image/*" onChange={handleSignatureChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        </div>

        {/* Item Details */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 mb-2">
              <div>
                <input type="text" name="description" placeholder="Description" value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <input type="number" name="unitPrice" placeholder="Unit Price" value={item.unitPrice} onChange={(e) => handleItemChange(index, 'unitPrice', e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <input type="number" name="quantity" placeholder="Quantity" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <input type="number" name="discount" placeholder="Discount" value={item.discount} onChange={(e) => handleItemChange(index, 'discount', e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="flex items-center">
                <button type="button" onClick={() => removeItem(index)} className="text-sm text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
          ))}
          <button type="button" onClick={addItem} className="text-sm text-indigo-600 hover:text-indigo-800">Add Item</button>
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Generate Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
