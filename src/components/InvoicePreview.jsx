import React from "react";
import { useReactToPrint } from "react-to-print";

const InvoicePreview = ({ formData }) => {
  const componentRef = React.useRef();

  // Function to handle printing using react-to-print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Function to format date as DD.MM.YYYY
  const formatDate = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}.${month}.${year}`;
  };

  // Calculate total net amount for all items
  const totalNetAmount = formData.items.reduce((total, item) => {
    return total + (item.unitPrice * item.quantity - item.discount);
  }, 0);

  // Calculate total tax amount based on place of supply
  const totalTaxAmount = formData.items.reduce((total, item) => {
    return total + (
      formData.placeOfSupply === formData.placeOfDelivery
        ? (item.unitPrice * item.quantity - item.discount) * 0.18
        : (item.unitPrice * item.quantity - item.discount) * 0.09
    );
  }, 0);

  // Calculate total amount (net amount + tax amount)
  const totalAmount = totalNetAmount + totalTaxAmount;

  // Calculate remaining amount (if any)
  const remainingAmount = formData.paymentAmount ? formData.paymentAmount - totalAmount : 0;

  // Helper function to calculate the tax amount for an item
  const calculateTaxAmount = (item) => {
    return formData.placeOfSupply === formData.placeOfDelivery
      ? (item.unitPrice * item.quantity - item.discount) * 0.18
      : (item.unitPrice * item.quantity - item.discount) * 0.09;
  };

  // Helper function to calculate the total amount for an item (net amount + tax amount)
  const calculateTotalItemAmount = (item) => {
    return (item.unitPrice * item.quantity - item.discount) + calculateTaxAmount(item);
  };


  // Utility function to convert numbers to words
  const numberToWords = (num) => {
    const a = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const b = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    const inWords = (num) => {
      if (num < 20) return a[num];
      const digit = num % 10;
      if (num < 100) return b[Math.floor(num / 10)] + (digit ? ' ' + a[digit] : '');
      if (num < 1000) return a[Math.floor(num / 100)] + ' hundred' + (num % 100 === 0 ? '' : ' and ' + inWords(num % 100));
      return inWords(Math.floor(num / 1000)) + ' thousand' + (num % 1000 !== 0 ? ' ' + inWords(num % 1000) : '');
    };
    return inWords(num);
  };
  return (
    <div ref={componentRef}>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between mb-10">
          <img
            src="https://i.ibb.co/Zmds4GZ/Amazon-India-Logo-PNG-HD.png"
            alt=""
            className="w-1/4"
          />
          <div className="text-right">
            <h2 className="text-lg font-bold">
              Tax Invoice/ Bill of Supply/Cash Memo
            </h2>
            <p>(Original for Recipient)</p>
          </div>
        </div>
        <div className="relative flex gap-10 justify-between">
          {/* left side */}
          <div className="w-1/2">
            <div className="mb-10">
              <strong>Sold By:</strong>
              <p>{formData.sellerName}</p>
              <p>
                {formData.sellerAddress}, {formData.sellerCity},{" "}
                {formData.sellerState} - {formData.sellerPincode}
              </p>
            </div>

            <div className="mb-4">
              <p>
                <strong>PAN No: </strong> {formData.sellerPAN}
              </p>
              <p>
                <strong>GST Registration No: </strong> {formData.sellerGST}
              </p>
              <div className="absolute bottom-4">
                <p>
                  <strong>Order Number: </strong>{formData.orderNo}
                </p>
                <p>
                  <strong>Order Date: </strong>{formatDate(formData.orderDate)}
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="text-right">
            <div className="mb-10  ">
              <strong>Billing Address:</strong>
              <p>{formData.billingName}</p>
              <p>
                {formData.billingAddress}, {formData.billingCity},{" "}
                {formData.billingState} - {formData.billingPincode}
              </p>
              <p>
                <strong>State/UT Code: </strong>
                {formData.billingUTCode}
              </p>
            </div>
            <div className="mb-4 ">
              <strong>Shipping Address:</strong>
              <p>{formData.shippingName}</p>
              <p>
                {formData.shippingAddress}, {formData.shippingCity},{" "}
                {formData.shippingState} - {formData.shippingPincode}
              </p>
              <p>
                <strong>State/UT Code: </strong>
                {formData.shippingUTCode}
              </p>
              <p>
                <strong>Place of supply: </strong>
                {formData.placeOfSupply}
              </p>
              <p>
                <strong>Place of delivery: </strong>
                {formData.placeOfDelivery}
              </p>
              <p>
                <strong>Invoice Number: </strong>
                {formData.invoiceNo}
              </p>
              <p>
                <strong>Invoice Details: </strong>
                {formData.invoiceDetails}
              </p>
              <p>
                <strong>Invoice Date: </strong>
                {formatDate(formData.invoiceDate)}
              </p>

            </div>
            
          </div>
        </div>

        <div className="mb-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Sl.<br />No</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Description</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Unit<br />Price</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Qty</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Net<br />Amount</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Tax<br />Type</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Tax<br />Amount</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase border">Total<br />Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 border">
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td className="py-4 border">{index + 1}</td>
                  <td className=" py-4 border">{item.description}</td>
                  <td className=" py-4 border">{item.unitPrice}</td>
                  <td className=" py-4 border">{item.quantity}</td>
                  <td className=" py-4 border">{(item.unitPrice * item.quantity - item.discount).toFixed(2)}</td>
                  <td className=" py-4 border">{formData.placeOfSupply === formData.placeOfDelivery ? 'CGST & SGST (9% each)' : 'IGST (18%)'}</td>
                  <td className=" py-4 border">{calculateTaxAmount(item).toFixed(2)}</td>
                  <td className=" py-4 border">{calculateTotalItemAmount(item).toFixed(2)}</td>
                </tr>
              ))}
              {/* Total Amount Row */}
              <tr className="border">
                <td className=" py-4 font-bold" colSpan="4">Total:</td>
                <td className=" py-4 font-bold"></td>
                <td className=" py-4"></td>
                <td className=" py-4 font-bold"></td>
                <td className=" py-4 font-bold border">{totalAmount.toFixed(2)}</td>
              </tr>
              {/* Amount in Words Row */}
              <tr className="border">
                <td className="px-6 py-4 whitespace-nowrap font-bold" colSpan="8">Amount in Words <br />{numberToWords(Math.round(totalAmount))}</td>
              </tr>
              {/* signature */}
              <tr className="border">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="px-6 py-4 whitespace-nowrap font-bold " colSpan={8}>For Varasiddhi Silk Exports: <br /> <div className="border w-64 h-14"><img src="" alt="" /></div> <br /> Authorized Signatory</td>
              </tr>

            </tbody>
          </table>
          <p>Whether tax is payable under reverse charge - {formData.reverseCharge ? 'Yes' : 'No'}</p>
        </div>
      </div>
      <button
        onClick={handlePrint}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Print Invoice
      </button>
    </div>
  );
};

export default InvoicePreview;
