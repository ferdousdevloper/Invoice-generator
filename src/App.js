import logo from './logo.svg';
import './App.css';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import { useState } from 'react';

function App() {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleFormSubmit = (formData) => {
    setInvoiceData(formData);
  };
  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <InvoiceForm onFormSubmit={handleFormSubmit} />
        </div>
        <div>
          {invoiceData ? (
            <InvoicePreview formData={invoiceData} />
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-bold mb-4">Invoice Preview</h2>
              <p className="text-gray-500">Preview will appear here after form submission.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
